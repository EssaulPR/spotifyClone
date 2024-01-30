import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaUserComponent } from './media-user.component';

describe('MediaUserComponent', () => {
  let component: MediaUserComponent;
  let fixture: ComponentFixture<MediaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
