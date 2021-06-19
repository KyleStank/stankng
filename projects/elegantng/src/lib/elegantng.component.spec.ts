import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegantngComponent } from './elegantng.component';

describe('ElegantngComponent', () => {
  let component: ElegantngComponent;
  let fixture: ComponentFixture<ElegantngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegantngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegantngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
