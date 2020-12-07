import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit {
  @Input() item: any;
  @Input() gridOptions: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.item, this.gridOptions);
  }

}
