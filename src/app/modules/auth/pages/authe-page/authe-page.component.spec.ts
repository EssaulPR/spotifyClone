import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthePageComponent } from './authe-page.component';

describe('AuthePageComponent', () => {
  let component: AuthePageComponent;
  let fixture: ComponentFixture<AuthePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
