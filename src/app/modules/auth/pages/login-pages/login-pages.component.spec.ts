import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPagesComponent } from './login-pages.component';

describe('LoginPagesComponent', () => {
  let component: LoginPagesComponent;
  let fixture: ComponentFixture<LoginPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
