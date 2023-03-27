import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HIndexComponent } from './h-index.component';

describe('HIndexComponent', () => {
  let component: HIndexComponent;
  let fixture: ComponentFixture<HIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
