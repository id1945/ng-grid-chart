import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

declare var zingchart: any;

@Component({
  selector: 'app-bar-widget',
  templateUrl: './bar-widget.component.html',
  styleUrls: ['./bar-widget.component.scss']
})
export class BarWidgetComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() item: any;
  public id: string;

  constructor() { }

  ngOnInit(): void {
    // Key is unique
    const r = Math.random().toString(36).substring(7)
    this.id = `bar-graph-${new Date().getTime()}-${r}`;
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
