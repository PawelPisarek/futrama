/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbCardModule,
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule, NbSelectModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { ListComponent } from './main/list/list.component';
import { CharacterComponent } from './main/character/character.component';
import { CharacterListComponent } from './main/character-list/character-list.component';
import { QuoteListComponent } from './main/quote-list/quote-list.component';
import { QuoteComponent } from './main/quote/quote.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CountQuotesFormComponent } from './main/count-quotes-form/count-quotes-form.component';

@NgModule({
  declarations: [AppComponent, ListComponent, CharacterComponent, CharacterListComponent, QuoteListComponent, QuoteComponent, CountQuotesFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    ReactiveFormsModule,
    NbCardModule,
    NbSelectModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
