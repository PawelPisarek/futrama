import {Component, OnInit} from '@angular/core';
import {CharactersModel} from '../characters.model';
import {Observable} from 'rxjs';
import {CharactersService} from '../list/characters.service';

@Component({
  selector: 'ngx-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {

  list$: Observable<CharactersModel[]>;

  constructor(private charactersService: CharactersService) {
  }

  ngOnInit(): void {
    this.list$ = this.charactersService.getList();
  }
}
