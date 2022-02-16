import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDateBuilderLimitationInput]'
})
export class DateBuilderLimitationInputDirective {

  constructor(private ref: ElementRef) { }

    @HostListener('input', [ '$event' ])
  public onInput(a_Event: InputEvent): void {
    let val = parseInt(this.ref.nativeElement.value);
 
    if(val < 10)
      this.ref.nativeElement.value = '0'+val;
  }
}
