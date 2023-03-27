import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedemenuComponent } from './sedemenu.component';

describe('SedemenuComponent', () => {
  let component: SedemenuComponent;
  let fixture: ComponentFixture<SedemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedemenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
