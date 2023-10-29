import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartBackgroundComponent } from './pie-chart-background.component';

describe('PieChartBackgroundComponent', () => {
  let component: PieChartBackgroundComponent;
  let fixture: ComponentFixture<PieChartBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
