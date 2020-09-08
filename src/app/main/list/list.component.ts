import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent<T> {

  @Input() keyName: string;

  @Input()
  set list(value: T[]) {
    this.characters = value;
    this.selectedList = (this.characters || []).reduce((p, c) => {
      p.set(c[this.keyName], false);
      return p;
    }, new Map());
  }

  @Input() public rowTemplate: TemplateRef<T>;
  public characters: T[];
  selectedList: Map<string, boolean>;

  onSelect(characters: T) {
    this.selectedList.set(characters[this.keyName], !this.selectedList.get(characters[this.keyName]));
  }
}
