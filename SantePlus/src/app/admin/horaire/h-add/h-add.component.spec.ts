import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HAddComponent } from './h-add.component';

describe('HAddComponent', () => {
  let component: HAddComponent;
  let fixture: ComponentFixture<HAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
