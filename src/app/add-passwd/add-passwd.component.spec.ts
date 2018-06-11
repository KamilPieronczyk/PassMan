import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPasswdComponent } from './add-passwd.component';

describe('AddPasswdComponent', () => {
  let component: AddPasswdComponent;
  let fixture: ComponentFixture<AddPasswdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPasswdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPasswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
