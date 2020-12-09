import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

declare var zingchart: any;

@Component({
  selector: 'app-radar-widget',
  templateUrl: './radar-widget.component.html',
  styleUrls: ['./radar-widget.component.scss']
})
export class RadarWidgetComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() item: any;
  public id: string;

  constructor() { }

  ngOnInit(): void {
    // Key is unique
    const r = Math.random().toString(36).substring(7)
    this.id = `ragar-graph-${new Date().getTime()}-${r}`;
  }
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      zingchart.render({
        id: this.id,
        data: this.item.widget.config,
        height: '100%',
        width: '100%'
      });
    }, 0);
  }

  ngOnDestroy(): void {
    zingchart.exec(this.id, 'destroy');
  }

}
