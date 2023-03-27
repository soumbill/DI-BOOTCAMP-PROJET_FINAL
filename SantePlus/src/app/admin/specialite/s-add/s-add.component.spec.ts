import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAddComponent } from './s-add.component';

describe('SAddComponent', () => {
  let component: SAddComponent;
  let fixture: ComponentFixture<SAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
