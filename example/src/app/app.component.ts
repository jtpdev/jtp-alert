import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: 'Test title',
    message: 'Message for user',
    type: 'error', // you can use 'success' or 'alert' as well
    btns: [
      {
        name: 'OK',
        function: () => {
          console.log('Ok button works'); // Here you can put your function
        },
        order: 1, // If not set order the value will be 0
        close: true, // The close parameter has true by default
        main: true // The button marked as main receive another style
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
