import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoIndexComponent } from './ho-index.component';

describe('HoIndexComponent', () => {
  let component: HoIndexComponent;
  let fixture: ComponentFixture<HoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
