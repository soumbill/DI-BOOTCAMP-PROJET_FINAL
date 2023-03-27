import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdEditComponent } from './rd-edit.component';

describe('RdEditComponent', () => {
  let component: RdEditComponent;
  let fixture: ComponentFixture<RdEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
