import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HDeleteComponent } from './h-delete.component';

describe('HDeleteComponent', () => {
  let component: HDeleteComponent;
  let fixture: ComponentFixture<HDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
