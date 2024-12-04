import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  el = inject(ElementRef);
  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.color = 'red';
      this.el.nativeElement.style.fontStyle = 'italic';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.color = 'black';
      this.el.nativeElement.style.fontStyle = 'normal';
    }
  });
}
