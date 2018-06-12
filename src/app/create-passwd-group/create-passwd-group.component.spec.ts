import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePasswdGroupComponent } from './create-passwd-group.component';

describe('CreatePasswdGroupComponent', () => {
  let component: CreatePasswdGroupComponent;
  let fixture: ComponentFixture<CreatePasswdGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePasswdGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePasswdGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
