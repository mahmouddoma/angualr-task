import { Component } from '@angular/core';

@Component({
  selector: 'app-lresources',
  templateUrl: './lresources.component.html',
  styleUrls: ['./lresources.component.css'],
})
export class LresourcesComponent {
  selectedDate!: Date;
  showInput: boolean = false;
  showLabel: boolean = true; 

  toggleInputVisibility() {
    this.showInput = !this.showInput; 
    this.showLabel = !this.showLabel;
  }

  numberValue = 3; 

  incrementNumber() {
    this.numberValue++;
  }

  decrementNumber() {
    if (this.numberValue > 0) {
      this.numberValue--;
    }
  }
  // Initial time value in minutes
  time: number = 30; 


  addTime() {
    this.time += 5;
    this.updateAddTime();
  }

  subtractTime() {
    if (this.time > 0) {
      this.time -= 5; 
      this.updateAddTime();
    }
  }

  updateAddTime() {
    const addTimeElement = document.querySelector('.addtime');
    if (addTimeElement) {
      addTimeElement.textContent = `${this.time} دقيقة`;
    }
  }

  // Multiple booking 

  isMoreThanOnePerson = false;

  toggleText() {
    this.isMoreThanOnePerson = !this.isMoreThanOnePerson;
  }

  // active radio
  isActive: boolean = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
