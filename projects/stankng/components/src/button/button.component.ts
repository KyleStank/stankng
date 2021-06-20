import { ChangeDetectionStrategy, Component, Directive, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Directive()
abstract class AbstractStankButton {
  @Input()
  disabled = false;

  @Output()
  onClick = new EventEmitter<MouseEvent>();
}

@Directive()
abstract class AbstractStankMaterialButton extends AbstractStankButton {
  @Input()
  color: string | undefined;

  @Input()
  disableRipple = false;
}

function generateComponentTemplate(matButtonDirective: string, content: string | undefined = undefined): string {
  return `
    <button
      ${matButtonDirective}
      [color]="color"
      [disabled]="disabled"
      [disableRipple]="disableRipple"
      (click)="onClick.emit($event)"
    >
      ${content ? content : '<ng-content></ng-content>'}
    </button>
  `;
}

@Component({
  selector: 'stank-button',
  template: generateComponentTemplate('mat-button'),
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class StankButton extends AbstractStankMaterialButton {}

@Component({
  selector: 'stank-button-flat',
  template: generateComponentTemplate('mat-flat-button'),
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class StankButtonFlat extends AbstractStankMaterialButton {}

@Component({
  selector: 'stank-button-icon',
  template: generateComponentTemplate(
    'mat-icon-button',
    `
      <stank-icon>
        <ng-content></ng-content>
      </stank-icon>
    `
  ),
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class StankButtonIcon extends AbstractStankMaterialButton {}

@Component({
  selector: 'stank-button-raised',
  template: generateComponentTemplate('mat-raised-button'),
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class StankButtonRaised extends AbstractStankMaterialButton {}
