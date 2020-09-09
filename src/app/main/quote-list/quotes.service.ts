import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CharactersModel} from '../characters.model';
import {map} from 'rxjs/operators';
import {QuotesModel} from '../quotes.model';
import {QueryInterface} from './navigate/query.interface';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor(private http: HttpClient) {
  }

  getList(count: QueryInterface): Observable<QuotesModel[]> {
    return this.http.get(`http://futuramaapi.herokuapp.com/api${count.getUrl().join('')}`)
      .pipe(map((quotes: QuotesModel[]) => {
        return quotes.map(quote => {
          return new QuotesModel(
            quote.character,
            quote.quote,
            quote.image,
          );
        });
      }));
  }
}
