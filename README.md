
# JtpAlert

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bdf1956a2bf0447aad4fd96da6159c26)](https://www.codacy.com/app/jtpdev/ng-alert?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jtpdev/ng-alert&amp;utm_campaign=Badge_Grade)

## Install

To install this, use:

> npm install --save jtp-alert

## Use

To use in your project import it in your module like that:

    import { BrowserModule } from  '@angular/platform-browser';
    
    import { NgModule } from  '@angular/core';
    
      
    
    import { AlertModule } from  'jtp-alert';
    
          
    
    import { AppComponent } from  './app.component';
    
      
      
    
    @NgModule({
    
    declarations: [
    
    AppComponent
       
    ],
    
    imports: [

    BrowserModule,

    AlertModule

    ],

    providers: [],    

    bootstrap: [AppComponent]

    })

    export  class  AppModule { }

and use in your component:

    <div style="text-align:center" (click)="show(alert)"></div>
    <jtp-alert #alert [data]="data"></jtp-alert>

and

    export class AppComponent {
      data = {
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

      show(alert){
        alert.show();
      }

    }
And done!

## Special thanks

Thanks for [hendrathings](https://stackoverflow.com/users/1458098/hendrathings) that helped me on [StackOverFlow](https://stackoverflow.com/users/4912838/jimmy-porto) and solve the problem ionicons's fonts not loading.