import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F007Component } from './f007.component';

describe('F007Component', () => {
  let component: F007Component;
  let fixture: ComponentFixture<F007Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [F007Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
