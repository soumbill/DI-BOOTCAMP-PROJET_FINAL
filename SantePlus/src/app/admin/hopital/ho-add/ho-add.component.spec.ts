import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoAddComponent } from './ho-add.component';

describe('HoAddComponent', () => {
  let component: HoAddComponent;
  let fixture: ComponentFixture<HoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
