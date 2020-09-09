import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';
import {QuoteListComponent} from '../main/quote-list/quote-list.component';
import {QuoteResolverService} from '../main/quote-resolver.service';
import {UrlStatic} from '../main/quote-list/navigate/url.static';
import {CharacterListComponent} from '../main/character-list/character-list.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'characters',
      component: CharacterListComponent,
    }, {
      path: 'quotes-by-characters',
      component: QuoteListComponent,
      resolve: {[UrlStatic.QUERY]: QuoteResolverService},
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
