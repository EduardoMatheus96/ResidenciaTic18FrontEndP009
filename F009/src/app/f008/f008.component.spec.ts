import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F008Component } from './f008.component';

describe('F008Component', () => {
  let component: F008Component;
  let fixture: ComponentFixture<F008Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [F008Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
