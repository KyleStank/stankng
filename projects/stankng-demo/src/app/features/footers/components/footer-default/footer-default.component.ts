import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer-default',
  templateUrl: './footer-default.component.html',
  styleUrls: ['./footer-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterDefaultComponent {}
