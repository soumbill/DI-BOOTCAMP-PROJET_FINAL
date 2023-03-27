import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdIndexComponent } from './rd-index.component';

describe('RdIndexComponent', () => {
  let component: RdIndexComponent;
  let fixture: ComponentFixture<RdIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
