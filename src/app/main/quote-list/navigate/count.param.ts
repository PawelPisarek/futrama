import {QueryInterface} from './query.interface';
import {Params} from '@angular/router';
import {UrlStatic} from './url.static';

export class CountParam implements QueryInterface {

  constructor(private count: number, private param: QueryInterface) {
  }

  getParams(): Params | null {
    return {...this.param.getParams(), [UrlStatic.COUNT]: this.count};
  }

  getSource(): string {
    return 'quotes';
  }


  getUrl(): string[] {
    const [source, ...rest] = this.param.getUrl();
    if (!this.count) {
      return !rest.length ?
        ['/', this.getSource()] :
        ['/', source, '/', ...rest];
    } else {
      return !rest.length ?
        ['/', this.getSource(), '/', String(this.count)] :
        ['/', source, '/', ...rest, '/', String(this.count)];
    }
  }
}
