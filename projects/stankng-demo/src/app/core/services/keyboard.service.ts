import { Injectable, OnDestroy } from '@angular/core';
import { combineLatest, fromEvent, merge, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, share, takeUntil } from 'rxjs/operators';

/**
 * Enum that represents common values of `KeyboardEvent.code`.
 */
export enum KeyCode {
  A = 'KeyA',
  B = 'KeyB',
  C = 'KeyC',
  D = 'KeyD',
  E = 'KeyE',
  F = 'KeyF',
  G = 'KeyG',
  H = 'KeyH',
  I = 'KeyI',
  J = 'KeyJ',
  K = 'KeyK',
  L = 'KeyL',
  M = 'KeyM',
  N = 'KeyN',
  O = 'KeyO',
  P = 'KeyP',
  Q = 'KeyQ',
  R = 'KeyR',
  S = 'KeyS',
  T = 'KeyT',
  U = 'KeyU',
  V = 'KeyV',
  W = 'KeyW',
  X = 'KeyX',
  Y = 'KeyY',
  Z = 'KeyZ',

  Number1 = 'Digit1',
  Number2 = 'Digit2',
  Number3 = 'Digit3',
  Number4 = 'Digit4',
  Number5 = 'Digit5',
  Number6 = 'Digit6',
  Number7 = 'Digit7',
  Number8 = 'Digit8',
  Number9 = 'Digit9',
  Number0 = 'Digit0',

  F1 = 'F1',
  F2 = 'F2',
  F3 = 'F3',
  F4 = 'F4',
  F5 = 'F5',
  F6 = 'F6',
  F7 = 'F7',
  F8 = 'F8',
  F9 = 'F9',
  F10 = 'F10',
  F11 = 'F11',
  F12 = 'F12',

  F13 = 'F13',
  F14 = 'F14',
  F15 = 'F15',
  F16 = 'F16',
  F17 = 'F17',
  F18 = 'F18',
  F19 = 'F19',
  F20 = 'F20',

  ScrollLock = 'ScrollLock',
  Pause = 'Pause',

  Escape = 'Escape',
  Backquote = 'Backquote',
  Minus = 'Minus',
  Equal = 'Equal',
  Backspace = 'Backspace',
  Tab = 'Tab',
  LeftBracket = 'BracketLeft',
  RightBracket = 'BracketRight',
  Backslash = 'Backslash',
  CapsLock = 'CapsLock',
  Semicolon = 'Semicolon',
  Quote = 'Quote',
  Enter = 'Enter',
  Comma = 'Comma',
  Period = 'Period',
  Slash = 'Slash',
  Space = 'Space',
  Function = 'Function',

  LeftControl = 'ControlLeft',
  LeftShift = 'ShiftLeft',
  LeftAlt = 'AltLeft',
  LeftMeta = 'MetaLeft', // Left Windows Key / Left Mac Command Key

  RightControl = 'ControlRight',
  RightShift = 'ShiftRight',
  RightAlt = 'AltRight',
  RightMeta = 'MetaRight', // Right Windows Key / Right Mac Command Key

  UpArrow = 'ArrowUp',
  DownArrow = 'ArrowDown',
  LeftArrow = 'ArrowLeft',
  RightArrow = 'ArrowRight',

  NumLock = 'NumLock',
  Numpad1 = 'Numpad1',
  Numpad2 = 'Numpad2',
  Numpad3 = 'Numpad3',
  Numpad4 = 'Numpad4',
  Numpad5 = 'Numpad5',
  Numpad6 = 'Numpad6',
  Numpad7 = 'Numpad7',
  Numpad8 = 'Numpad8',
  Numpad9 = 'Numpad9',
  Numpad0 = 'Numpad0',
  NumpadDecimal = 'NumpadDecimal',
  NumpadEnter = 'NumpadEnter',
  NumpadAdd = 'NumpadAdd',
  NumpadSubtract = 'NumpadSubtract',
  NumpadMultiply = 'NumpadMultiply',
  NumpadDivide = 'NumpadDivide',

  Insert = 'Insert',
  Delete = 'Delete',
  Home = 'Home',
  End = 'End',
  PageUp = 'PageUp',
  PageDown = 'PageDown'
}

/**
 * Provides easy access for interacting with the keyboard.
 */
@Injectable()
export class KeyboardService implements OnDestroy {
  private readonly _destroyed = new Subject<void>();

  private readonly _rawKeyDown$: Observable<KeyboardEvent>;
  /**
   * Raw Observable that is emitted when any key is pressed down.
   */
  get rawKeyDown$(): Observable<KeyboardEvent> { return this._rawKeyDown$; }

  private readonly _rawKeyUp$: Observable<KeyboardEvent>;
  /**
   * Raw Observable that is emitted when any key is lifted.
   */
  get rawKeyUp$(): Observable<KeyboardEvent> { return this._rawKeyUp$; }

  private readonly _rawKeyEvent$: Observable<KeyboardEvent>;
  /**
   * Raw Observable that is emitted when any key is pressed down or lifted.
   * Merged from `rawKeyDown$` and `rawKeyUp$`.
   */
  get rawKeyEvent$(): Observable<KeyboardEvent> { return this._rawKeyEvent$; }

  constructor() {
    this._rawKeyDown$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(takeUntil(this._destroyed));
    this._rawKeyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(takeUntil(this._destroyed));
    this._rawKeyEvent$ = merge(this._rawKeyDown$, this._rawKeyUp$).pipe(
      takeUntil(this._destroyed),
      distinctUntilChanged((a, b) => a.code === b.code && a.type === b.type),
      share()
    );
  }

  /**
   * Creates an Observable that emits when a provided key is pressed or lifted.
   *
   * @param key Specific KeyCode to use.
   * @returns Observable with KeyboardEvent.
   */
  keyPress$(key: KeyCode, preventDefault: boolean = false): Observable<KeyboardEvent> {
    return this._rawKeyEvent$.pipe(
      takeUntil(this._destroyed),
      map(e => {
        if (preventDefault) {
          e.preventDefault();
        }

        return e;
      }),
      filter(e => e.code === key.valueOf())
    );
  }

  /**
   * Creates an Observable that emits when any key in a provided array of keys are pressed.
   * Both key press and key up events are emitted.
   *
   * @param keys Array of KeyCodes to use.
   * @returns Array of Observables with KeyboardEvent.
   */
  multiKeyPress$(keys: KeyCode[], preventDefault: boolean = false): Observable<KeyboardEvent>[] {
    return keys.map(x => this.keyPress$(x, preventDefault));
  }

  /**
   * Creates an Observable that is emitted when a specific combination of keys are pressed at the same time.
   *
   * @param keys Array of KeyCodes to use.
   * @returns Observable with array of KeyboardEvents.
   */
  shortcut$(keys: KeyCode[], preventDefault: boolean = false): Observable<KeyboardEvent[]> {
    return combineLatest(this.multiKeyPress$(keys, preventDefault)).pipe(
      takeUntil(this._destroyed),
      filter<KeyboardEvent[]>(arr =>
        arr.every(e => e.type === 'keydown')
      )
    );
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
