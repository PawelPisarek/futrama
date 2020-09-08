import {QueryInterface} from './query.interface';
import {Params} from '@angular/router';
import {QuotesModel} from '../../quotes.model';
import {UrlStatic} from './url.static';

export class CharacterParam implements QueryInterface {

  constructor(private quotes: QuotesModel) {
  }

  getParams(): Params | null {
    return {[UrlStatic.CHARACTER]: this.quotes.character};
  }

  getSource(): string {
    return 'characters';
  }


  getUrl(): string[] {
    const character = this.quotes.character;
    if (!character) {
      return [this.getSource()];
    } else {
      return [this.getSource(), character];
    }
  }

}
