import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {

  birthDate = new Date();
  customDate = new Date();
  customPickerOptions: any;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (event: any) => {
          console.log('Clicked Save!', event)
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  dateChange(event: any) {
    console.log(event);
    console.log("dateChange", new Date(event.detail.value));
  }

}
