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
    // itemChangeCallback: (item, itemComponent) => this.editorService.changeWidget(item),
    minCols: 30,
    minRows: 20,
    maxCols: 30,
    maxRows: 20,
    outerMargin: false,
    margin: 10,
    disableScrollHorizontal: true,
    disableScrollVertical: true,
    draggable: {
      enabled: true
    },
    resizable: {
      enabled: true
    },
    allowMultiLayer: true,
    pushItems: true,
  };

  public dataLayout: any[] = [];

  constructor(
    private grid: GridService
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

}
