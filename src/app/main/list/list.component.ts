import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'futurama-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent<T> {
  @Input() keyName: string;
  @Input() public rowTemplate: TemplateRef<T>;
  @Input() public list: T[];
}
