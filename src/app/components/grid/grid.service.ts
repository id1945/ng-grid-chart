import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import Exampledata from './example';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  public dataLayout = new BehaviorSubject(null);

  constructor() {
    this.getWidgets();
  }

  public getWidgets(): void {
    // CALL API
    this.dataLayout.next(Exampledata.widgets);
  }
}
