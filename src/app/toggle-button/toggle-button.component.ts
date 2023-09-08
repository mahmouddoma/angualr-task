import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {
  isToggled = false;

  toggle() {
    this.isToggled = !this.isToggled;
  }
}
