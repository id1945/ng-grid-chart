import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

declare var zingchart: any;


@Component({
  selector: 'app-area-widget',
  templateUrl: './area-widget.component.html',
  styleUrls: ['./area-widget.component.scss']
})
export class AreaWidgetComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      zingchart.render({
        id: 'area-graph',
        data: this.item.widget.config,
        height: '100%',
        width: '100%'
      });
    }, 0);
  }

  ngOnDestroy(): void {
    zingchart.exec('area-graph', 'destroy');
  }

}
