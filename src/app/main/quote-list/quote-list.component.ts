import {Component, OnInit, TemplateRef} from '@angular/core';
import {merge, Observable, of, Subject} from 'rxjs';
import {QuotesService} from './quotes.service';
import {QuotesModel} from '../quotes.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CountParam} from './navigate/count.param';
import {CharacterParam} from './navigate/character.param';
import {QueryInterface} from './navigate/query.interface';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {UrlStatic} from './navigate/url.static';
import {NbDialogService} from '@nebular/theme';
import {FiveQuotesCharacterComponent} from '../five-quotes-character/five-quotes-character.component';

@Component({
  selector: 'futurama-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss'],
})
export class QuoteListComponent implements OnInit {
  list$: Observable<QuotesModel[]>;
  query: QueryInterface;
  formValue: number;
  refreshList$ = new Subject();

  constructor(private quotesService: QuotesService, private router: Router, private route: ActivatedRoute,
              private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
    this.list$ = merge(this.route.data.pipe(map(params => params[UrlStatic.QUERY])), this.refreshList$).pipe(
      tap(params => {
        this.query = params;
      }),
      mergeMap(_ => this.quotesService.getList(this.query).pipe(catchError(val => of([])))));
  }

  addParametersToUrl() {
    this.router.navigate(['.'], {relativeTo: this.route, queryParams: this.query.getParams()});
  }

  onSetCharacter(quotes: QuotesModel) {
    // this.refreshList$.next(new CountParam(this.query.getParams()[UrlStatic.COUNT], new CharacterParam(quotes)));
    // this.addParametersToUrl(); // add character to url and get list

    this.dialogService.open(
      FiveQuotesCharacterComponent,
      {
        context: {
          title: quotes.character,
          quotes,
        },
      });
  }

  onCount(count: number) {
    this.refreshList$.next(new CountParam(count, new CharacterParam(
      new QuotesModel(this.query.getParams()[UrlStatic.CHARACTER], null, null))));
    this.addParametersToUrl();
  }

  formOpen() {
    this.formValue = this.query.getParams()[UrlStatic.COUNT];
  }
}
