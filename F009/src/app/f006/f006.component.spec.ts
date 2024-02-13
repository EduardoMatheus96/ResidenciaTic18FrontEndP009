import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F006Component } from './f006.component';

describe('F006Component', () => {
  let component: F006Component;
  let fixture: ComponentFixture<F006Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [F006Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
