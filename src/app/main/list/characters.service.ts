import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharactersModel} from '../characters.model';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  constructor(private http: HttpClient) {
  }

  getList(): Observable<CharactersModel[]> {
    return this.http.get('http://futuramaapi.herokuapp.com/api/v2/characters')
      .pipe(map((charactersModel: CharactersModel[]) => {
        return charactersModel.map(character => {
          return new CharactersModel(
            character.Species,
            character.Age,
            character.Planet,
            character.Profession,
            character.Status,
            character.FirstAppearance,
            character.PicUrl,
            character.Relatives,
            character.VoicedBy,
            character.Name);
        });
      }));
  }
}
