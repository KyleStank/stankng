import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  clicked(e: MouseEvent): void {
    console.log(e);
    alert('Clicked!');
  }
}
