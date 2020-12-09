import { Component, OnInit } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import { GridService } from './grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public options: GridsterConfig;
  public dataLayout: any[] = [];

  constructor(
    public grid: GridService
  ) {
    this.grid.dataLayout.subscribe(res => {
      this.dataLayout = res;
    });
    this.grid.options.subscribe(res => {
      this.options = res;
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
      this.grid.changeConfig(this.options);
    }
  }

  public onResizable(e): void {
    this.options.resizable.enabled = e.target.checked;
    if (this.options.api) {
      this.options.api.resize();
      this.options.api.optionsChanged();
      this.grid.changeConfig(this.options);
    }
  }

  public onCols(e): void {
    this.options.minCols = e.target.value;
    this.options.maxCols = e.target.value;
    if (this.options.api) {
      this.options.api.optionsChanged();
      this.grid.changeConfig(this.options);
    }
  }

  public onRows(e): void {
    this.options.minRows = e.target.value;
    this.options.maxRows = e.target.value;
    if (this.options.api) {
      this.options.api.optionsChanged();
      this.grid.changeConfig(this.options);
    }
  }

  public clear(): void {
    const r = confirm('Do you want to revert to original version?');
    if (r == true) {
      localStorage.clear();
      window.location.reload();
    }
  }

  public save(): void {
    alert('Please see console or at output!');
    console.log('Save:',this.grid.dataLayout.value);
  }

}
