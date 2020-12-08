import { Component, OnInit } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import { GridService } from './grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public options: GridsterConfig = {
    gridType: 'scrollVertical',
    itemChangeCallback: (item) => this.grid.changeWidget(item),
    minCols: 30,
    minRows: 20,
    maxCols: 30,
    maxRows: 20,
    outerMargin: false,
    margin: 10,
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

  public dataLayout: any[] = [];

  constructor(
    public grid: GridService
  ) {
    this.grid.dataLayout.subscribe(res => {
      this.dataLayout = res;
    });
  }

  ngOnInit(): void {
  }

  public trackBy(index): void {
    return index;
  }

  public onDraggable(e): void {
    this.options.draggable.enabled = e.target.checked;
    if (this.options.api) {
      this.options.api.optionsChanged();
    }
  }

  public onResizable(e): void {
    this.options.resizable.enabled = e.target.checked;
    if (this.options.api) {
      this.options.api.resize();
      this.options.api.optionsChanged();
    }
  }

  public onCols(e): void {
    this.options.minCols = e.target.value;
    this.options.maxCols = e.target.value;
    if (this.options.api) {
      this.options.api.optionsChanged();
    }
  }

  public onRows(e): void {
    this.options.minRows = e.target.value;
    this.options.maxRows = e.target.value;
    if (this.options.api) {
      this.options.api.optionsChanged();
    }
  }

  public clear(): void {
    localStorage.clear();
    window.location.reload();
  }

}
