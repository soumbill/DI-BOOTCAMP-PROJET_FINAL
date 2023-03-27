import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdDeleteComponent } from './rd-delete.component';

describe('RdDeleteComponent', () => {
  let component: RdDeleteComponent;
  let fixture: ComponentFixture<RdDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
