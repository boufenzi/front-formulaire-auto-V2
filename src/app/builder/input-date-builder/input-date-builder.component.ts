import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-date-builder',
  templateUrl: './input-date-builder.component.html',
  styleUrls: ['./input-date-builder.component.css']
})
export class InputDateBuilderComponent implements OnInit {
  @Input() dateForm: FormGroup;
  @Input() attributForm: string;
  @Input() min: number;
  @Input() max: number;
  @Input() fieldLabel: string;
  @Input() incrementValue: number;
  constructor() { }

  ngOnInit(): void {
    this.incrementValue = +this.incrementValue; //conversion from string to int
    ;
  }

  timeoutHandler: any;
  public mouseup() {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  public mousedownIncrement() {

    this.timeoutHandler = setInterval(() => {
      if (this.incrementValue >= this.min && this.incrementValue < this.max) {
        this.incrementValue += 1;

        this.dateForm.get(this.attributForm)
          .setValue((this.incrementValue < 10 ? '0' + this.incrementValue : this.incrementValue));
      }
    }, 100);


  }

  public mousedownDecrement() {

    this.timeoutHandler = setInterval(() => {
      if (this.incrementValue > this.min && this.incrementValue <= this.max) {
        this.incrementValue -= 1;

        this.dateForm.get(this.attributForm).setValue(this.incrementValue);
      }
    }, 100);

  }


}
