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
    // DUMY CALL API
    const data = localStorage.getItem('data');
    if (data) {
      this.dataLayout.next(JSON.parse(data));
    } else {
      this.dataLayout.next(Exampledata.widgets);
      localStorage.setItem('data', JSON.stringify(Exampledata.widgets));
    }
  }

  public changeWidget(widget): void {
    const dataStorage = JSON.parse(localStorage.getItem('data'));
    if (dataStorage) {
      const data = dataStorage.map(f => {
        return (f.id === widget.id) ? widget : f;
      });
      this.dataLayout.next(data);
      localStorage.setItem('data', JSON.stringify(data));
    }
  }

  public delete(widget): void {
    const dataStorage = JSON.parse(localStorage.getItem('data'));
    if (dataStorage) {
      const data = dataStorage.filter(f => f.id !== widget.id);
      this.dataLayout.next(data);
      localStorage.setItem('data', JSON.stringify(data));
    }
  }

  public add(): void {
    console.log('TODO');
  }
}
