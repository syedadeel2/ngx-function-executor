import { Directive, AfterViewInit } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[ngx-fe]'
})
export class NgxFunctionExecutorDirective implements AfterViewInit {

  @Input() fnObject: Object;
  @Input() fnName: string;
  @Input() fnParm: any[];

  constructor() { }


  ngAfterViewInit(): void {
    if (this.fnObject != null && this.fnObject != undefined) {
      if (this.fnObject.hasOwnProperty(this.fnName)) {
        this.fnObject[this.fnName](this.fnParm);
      }
    }
  }

}
