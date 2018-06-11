import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdListComponent } from './passwd-list.component';

describe('PasswdListComponent', () => {
  let component: PasswdListComponent;
  let fixture: ComponentFixture<PasswdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
