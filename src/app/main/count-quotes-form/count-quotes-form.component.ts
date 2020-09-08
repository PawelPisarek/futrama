import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {UrlStatic} from '../quote-list/navigate/url.static';

@Component({
  selector: 'ngx-count-quotes-form',
  templateUrl: './count-quotes-form.component.html',
  styleUrls: ['./count-quotes-form.component.scss'],
})
export class CountQuotesFormComponent implements OnInit {
  @Input()
  set formValue(value: number) {
    this.form.patchValue(value);
  }

  form = new FormControl();
  show: boolean;
  @Input() count: number;
  @Input() values: string[];
  @Output() countChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() formOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
    this.values = Array.from(Array(this.count), (d, i) => String(i + 1));
  }

  setCount() {
    this.countChanged.emit(this.form.value);
  }

  open() {
    this.show = !this.show;
    if (this.show) {
      this.formOpen.emit();
    }
  }
}
