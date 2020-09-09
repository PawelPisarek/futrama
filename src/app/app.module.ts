/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CoreModule} from './@core/core.module';
import {ThemeModule} from './@theme/theme.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
  NbWindowModule,
} from '@nebular/theme';
import {HttpClientModule} from '@angular/common/http';
import {MainModule} from './main/main/main.module';
import { FiveQuotesCharacterComponent } from './main/five-quotes-character/five-quotes-character.component';

@NgModule({
  declarations: [AppComponent, FiveQuotesCharacterComponent],
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
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    MainModule,
    NbCardModule,
    NbSelectModule,
    NbButtonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
