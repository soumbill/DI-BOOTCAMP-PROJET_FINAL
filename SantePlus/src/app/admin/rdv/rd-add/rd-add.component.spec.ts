import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdAddComponent } from './rd-add.component';

describe('RdAddComponent', () => {
  let component: RdAddComponent;
  let fixture: ComponentFixture<RdAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
