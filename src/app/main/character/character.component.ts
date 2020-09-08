import {Component, Input, OnInit} from '@angular/core';
import {CharactersModel} from '../characters.model';

@Component({
  selector: 'ngx-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {

  @Input() charactersModel: CharactersModel;
  @Input() selected: boolean;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.charactersModel);
  }

}
