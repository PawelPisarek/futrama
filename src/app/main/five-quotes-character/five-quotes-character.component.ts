import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {QuotesService} from '../quote-list/quotes.service';
import {CountParam} from '../quote-list/navigate/count.param';
import {CharacterParam} from '../quote-list/navigate/character.param';
import {QuotesModel} from '../quotes.model';

@Component({
  selector: 'futurama-five-quotes-character',
  templateUrl: './five-quotes-character.component.html',
  styleUrls: ['./five-quotes-character.component.scss'],
})
export class FiveQuotesCharacterComponent implements OnInit {
  @Input() title: string;
  @Input() quotes: QuotesModel;

  list$: Observable<QuotesModel[]>;

  constructor(protected ref: NbDialogRef<FiveQuotesCharacterComponent>, private quotesService: QuotesService) {
  }

  ngOnInit(): void {
    this.list$ = this.quotesService.getList(new CountParam(5, new CharacterParam(
      this.quotes))).pipe(catchError(val => of([])));
  }


  dismiss() {
    this.ref.close();
  }

}
