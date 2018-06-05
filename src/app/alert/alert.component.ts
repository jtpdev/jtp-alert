import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jtp-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() data: any;
  shown = false;
  color = '#03A9F4';
  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    if (this.data) {
      if (this.data.type) {
        switch (this.data.type) {
          case 'success':
            this.color = '#72BB53';
            break;
          case 'error':
            this.color = '#FF3823';
            break;
        }
      }
      if (this.data.btns) {
        this.data.btns = this.data.btns.sort((b1, b2) => {
          return (b1.order ? b1.order : 0) - (b2.order ? b2.order : 0);
        });
      }
    }
  }

  show() {
    this.init();
    this.shown = true;
  }

  hide() {
    this.shown = false;
  }

  call(fnc, close) {
    if (close != false) {
      this.hide();
    }
    if (fnc) fnc();
  }

  style(main) {
    let btnClass = {
      'color': this.color,
      'background-color': 'white',
      'border': `1px solid ${this.color}`,
      'border-color': this.color,
      'margin-left': '5px'
    }

    if (main) {
      btnClass['background-color'] = this.color;
      btnClass['color'] = 'white';
    }

    return btnClass;
  }

}
