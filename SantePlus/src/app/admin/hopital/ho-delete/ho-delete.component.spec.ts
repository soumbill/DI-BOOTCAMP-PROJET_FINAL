import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoDeleteComponent } from './ho-delete.component';

describe('HoDeleteComponent', () => {
  let component: HoDeleteComponent;
  let fixture: ComponentFixture<HoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
