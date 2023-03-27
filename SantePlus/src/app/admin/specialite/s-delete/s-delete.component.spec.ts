import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDeleteComponent } from './s-delete.component';

describe('SDeleteComponent', () => {
  let component: SDeleteComponent;
  let fixture: ComponentFixture<SDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
