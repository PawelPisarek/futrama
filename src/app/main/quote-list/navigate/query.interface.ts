import {Params} from '@angular/router';

export interface QueryInterface {
  getParams(): Params | null;
  getUrl(): string[];
  getSource(): string;
}
