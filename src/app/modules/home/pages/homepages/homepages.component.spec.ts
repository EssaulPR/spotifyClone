import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagesComponent } from './homepages.component';

describe('HomepagesComponent', () => {
  let component: HomepagesComponent;
  let fixture: ComponentFixture<HomepagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
