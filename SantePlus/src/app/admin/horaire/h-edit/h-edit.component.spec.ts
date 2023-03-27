import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HEditComponent } from './h-edit.component';

describe('HEditComponent', () => {
  let component: HEditComponent;
  let fixture: ComponentFixture<HEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
