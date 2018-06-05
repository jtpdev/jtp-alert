import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  dataS = {
    title: 'Test title',
    message: 'Message for user',
    type: 'success',
    btns: [
      {
        name: 'OK',
        function: () => {
          console.log('Ok button works');
        },
        order: 1,
        close: true,
        main: true
      },
      {
        name: 'Cancel',
        close: false
      }
    ]
  };

  dataA = {
    title: 'Test title',
    message: 'Message for user',
    type: 'alert',
    btns: [
      {
        name: 'OK',
        function: () => {
          console.log('Ok button works');
        },
        order: 1,
        close: true,
        main: true
      },
      {
        name: 'Cancel',
        close: false
      }
    ]
  };

  dataE = {
    title: 'Test title',
    message: 'Message for user',
    type: 'error',
    btns: [
      {
        name: 'OK',
        function: () => {
          console.log('Ok button works');
        },
        order: 1,
        close: true,
        main: true
      },
      {
        name: 'Cancel',
        close: false
      }
    ]
  };

  show(alert){
    alert.show();
  }

}
