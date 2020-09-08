import {Injectable} from '@angular/core';
import {QueryInterface} from './quote-list/navigate/query.interface';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CountParam} from './quote-list/navigate/count.param';
import {CharacterParam} from './quote-list/navigate/character.param';
import {QuotesModel} from './quotes.model';
import {UrlStatic} from './quote-list/navigate/url.static';

@Injectable({
  providedIn: 'root',
})
export class QuoteResolverService implements Resolve<QueryInterface> {


  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): QueryInterface {
    return new CountParam(route.queryParams[UrlStatic.COUNT], new CharacterParam(
        new QuotesModel(route.queryParams[UrlStatic.CHARACTER], null, null)));
  }
}
