import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaWidgetComponent } from './area-widget.component';

describe('AreaWidgetComponent', () => {
  let component: AreaWidgetComponent;
  let fixture: ComponentFixture<AreaWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
