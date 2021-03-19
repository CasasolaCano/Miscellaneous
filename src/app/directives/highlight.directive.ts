import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  

  constructor(private el:ElementRef) {
    
  }

  @Input('appHighlight') newColor:string | undefined;
  
  @HostListener('mouseenter') mouseEnter() {

    this.highlight(this.newColor || 'yellow');
  }

  @HostListener('mouseleave') mouseExit() {

    this.highlight("");
  }

  private highlight(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
