import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncFilesListComponent } from './enc-files-list.component';

describe('EncFilesListComponent', () => {
  let component: EncFilesListComponent;
  let fixture: ComponentFixture<EncFilesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncFilesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncFilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
