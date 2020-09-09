import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {QuotesModel} from '../quotes.model';
import {NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'futurama-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit, OnDestroy {
  @Input() quote: QuotesModel;
  @Output() setCharacter = new EventEmitter();
  imageUrl: string;
  private alive = true;
  breakpoint: NbMediaBreakpoint = {name: '', width: 0};

  constructor(private themeService: NbThemeService, private breakpointService: NbMediaBreakpointsService) {
  }

  ngOnInit(): void {
    this.themeService.onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([oldValue, newValue]) => {
        const {xl} = this.breakpointService.getBreakpointsMap();
        if (this.quote.image.includes('image/fetch/') && newValue.width < xl) {
          this.imageUrl = this.quote.image.replace('w_500', 'w_100');
        } else {
          this.imageUrl = this.quote.image;
        }
        this.breakpoint = newValue;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
