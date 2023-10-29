import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartTextComponent } from './pie-chart-text.component';

describe('PieChartTextComponent', () => {
  let component: PieChartTextComponent;
  let fixture: ComponentFixture<PieChartTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
