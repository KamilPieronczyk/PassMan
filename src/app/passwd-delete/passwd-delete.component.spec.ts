import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdDeleteComponent } from './passwd-delete.component';

describe('PasswdDeleteComponent', () => {
  let component: PasswdDeleteComponent;
  let fixture: ComponentFixture<PasswdDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswdDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswdDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
