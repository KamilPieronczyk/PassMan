import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncFileComponent } from './enc-file.component';

describe('EncFileComponent', () => {
  let component: EncFileComponent;
  let fixture: ComponentFixture<EncFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
