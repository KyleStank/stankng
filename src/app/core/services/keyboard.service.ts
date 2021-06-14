import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * Callback that wraps the KeyboardEvent.
 */
type KeyboardFn = (event: KeyboardEvent) => void;

@Injectable()
export class KeyboardService implements OnDestroy {
  private readonly _destroyed = new Subject<void>();

  private readonly _keyDown$: Observable<KeyboardEvent>;
  private readonly _keyUp$: Observable<KeyboardEvent>;

  constructor() {
    this._keyDown$ = this.createKeyboardObservable('keydown');
    this._keyUp$ = this.createKeyboardObservable('keyup');
  }

  /**
   * @description
   * Creates an Observable that is designed to be used for event name `event` of type `KeyboardEvent`.
   *
   * @param event Name of event to create Observable from.
   * @returns Observable with piped streams designed for keyboard events.
   */
  createKeyboardObservable(event: string): Observable<KeyboardEvent> {
    return fromEvent<KeyboardEvent>(document, event)
      .pipe(takeUntil(this._destroyed));
  }

  /**
   * @description
   * Invokes `callback` when a key on the keyboard is pressed down.
   *
   * @note `callback` is automatically unsubscribed from the `keydown` event.
   * @param callback Function invoked when `keydown` occurs.
   * @returns `Subscription` of callback function.
   */
  onKeyDown = (callback: KeyboardFn): Subscription => this._keyDown$.subscribe(callback.bind(this));

  /**
   * @description
   * Subscribes `callback` to the `keyup` event.
   * `keyup` is dispatched when a key on the keyboard is released.

   * @note `callback` is automatically unsubscribed from the `keyup` event.
   * @param callback Function invoked when `keyup` occurs.
   * @returns `Subscription` of callback function.
   */
  onKeyUp = (callback: KeyboardFn): Subscription => this._keyUp$.subscribe(callback.bind(this));

  ngOnDestroy(): void {
    console.log('Destroyed!');

    this._destroyed.next();
    this._destroyed.complete();
  }
}
