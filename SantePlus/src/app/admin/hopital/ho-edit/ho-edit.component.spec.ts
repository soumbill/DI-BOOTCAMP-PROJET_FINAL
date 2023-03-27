import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoEditComponent } from './ho-edit.component';

describe('HoEditComponent', () => {
  let component: HoEditComponent;
  let fixture: ComponentFixture<HoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
