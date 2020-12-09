import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import Exampledata from './example';
import { maxBy } from 'lodash';
import { GridsterConfig } from 'angular-gridster2';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  public dataLayout = new BehaviorSubject(null);
  public options: GridsterConfig = new BehaviorSubject(null);

  constructor() {
    this.initConfig();
    this.getWidgets();
  }

  public initConfig() {
    const options = {
      gridType: 'scrollVertical',
      // itemChangeCallback: (item) => this.changeWidget(item),
      minCols: 8,
      minRows: 6,
      maxCols: 8,
      maxRows: 6,
      outerMargin: false,
      margin: 15,
      disableScrollHorizontal: true,
      disableScrollVertical: true,
      draggable: {
        enabled: false
      },
      resizable: {
        enabled: false
      },
      allowMultiLayer: true,
      pushItems: true,
    };
    const data = JSON.parse(localStorage.getItem('options')); // CALL API: get config
    if (data) {
      // Success
      this.options.next(data);
    } else {
      // Failed: Thì lấy dữ liệu default
      this.options.next(options);
      localStorage.setItem('options', JSON.stringify(options));
    }
  }

  public getWidgets(): void {
    const data = localStorage.getItem('data'); // CALL API: get data layout
    if (data) {
      // Success
      this.dataLayout.next(JSON.parse(data));
    } else {
      // Fail: Thì lấy dữ liệu default
      this.dataLayout.next(Exampledata.widgets);
      localStorage.setItem('data', JSON.stringify(Exampledata.widgets));
    }
  }

  public changeConfig(options): void {
    localStorage.setItem('options', JSON.stringify(options)); // CALL API: Update config
    this.options.next(options);
  }

  public changeWidget(widget): void {
    const dataStorage = JSON.parse(localStorage.getItem('data')); // CALL API: Update data layout
    if (dataStorage) {
      const data = dataStorage.map(f => {
        return (f.id === widget.id) ? widget : f;
      });
      this.dataLayout.next(data);
      localStorage.setItem('data', JSON.stringify(data));
    }
  }

  public delete(widget): void {
    const dataStorage = JSON.parse(localStorage.getItem('data')); // CALL API: Xóa 1 item data layout
    if (dataStorage) {
      const data = dataStorage.filter(f => f.id !== widget.id);
      this.dataLayout.next(data);
      localStorage.setItem('data', JSON.stringify(data));
    }
  }

  public add(): void {
    const dataStorage = JSON.parse(localStorage.getItem('data')); // CALL API: Insert 1 item data layout
    if (dataStorage.length < this.options.value.minRows) {
      const r = Math.floor(Math.random() * 4); // Radom 0->3
      const data = { ...Exampledata.widgets[r] }; // Get base id = radom
      const maxId = maxBy(dataStorage, 'id')['id']; // Max ID
      data.id = Number(maxId) + 1;
      data.y = 0;
      data.x = 0;
      data.widget.name = `${data.widget.name}-${data.id}`; // Change name
      dataStorage.push(data); // Add new item
      this.dataLayout.next(dataStorage); // Load list data
      localStorage.setItem('data', JSON.stringify(dataStorage)); // Save localstorage
    } else {
      alert(`Warning! Can only add up to ${this.options.value.minRows} records.`);
    }
  }
}
