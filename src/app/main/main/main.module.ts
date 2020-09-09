import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuoteListComponent} from '../quote-list/quote-list.component';
import {CharacterListComponent} from '../character-list/character-list.component';
import {CountQuotesFormComponent} from '../count-quotes-form/count-quotes-form.component';
import {ListComponent} from '../list/list.component';
import {QuoteComponent} from '../quote/quote.component';
import {CharacterComponent} from '../character/character.component';
import {NbButtonModule, NbCardModule, NbIconModule, NbSelectModule} from '@nebular/theme';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [QuoteListComponent,
    CharacterListComponent,
    CountQuotesFormComponent,
    ListComponent,
    QuoteComponent,
    CharacterComponent],
    imports: [
        CommonModule,
        NbCardModule,
        NbSelectModule,
        ReactiveFormsModule,
        NbButtonModule,
        NbIconModule,
    ],
  exports: [
    ListComponent,
    QuoteComponent
  ]
})
export class MainModule {
}
