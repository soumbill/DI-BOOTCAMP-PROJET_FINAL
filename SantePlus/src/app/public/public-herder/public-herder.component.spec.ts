import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicHerderComponent } from './public-herder.component';

describe('PublicHerderComponent', () => {
  let component: PublicHerderComponent;
  let fixture: ComponentFixture<PublicHerderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicHerderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicHerderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
