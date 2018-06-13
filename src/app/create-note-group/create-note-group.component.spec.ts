import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNoteGroupComponent } from './create-note-group.component';

describe('CreateNoteGroupComponent', () => {
  let component: CreateNoteGroupComponent;
  let fixture: ComponentFixture<CreateNoteGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNoteGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNoteGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
