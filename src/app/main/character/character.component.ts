import {Component, Input, OnInit} from '@angular/core';
import {CharactersModel} from '../characters.model';
import {QuotesModel} from '../quotes.model';

@Component({
  selector: 'futurama-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {

  @Input()
  set charactersModel(value: CharactersModel) {
    this.quote = new QuotesModel(value.Name, value.Species, value.PicUrl);
  }
  quote: QuotesModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
