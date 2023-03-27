import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutmedecinComponent } from './logoutmedecin.component';

describe('LogoutmedecinComponent', () => {
  let component: LogoutmedecinComponent;
  let fixture: ComponentFixture<LogoutmedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutmedecinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
