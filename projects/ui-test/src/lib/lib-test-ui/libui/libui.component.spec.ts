import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibuiComponent } from './libui.component';

describe('LibuiComponent', () => {
  let component: LibuiComponent;
  let fixture: ComponentFixture<LibuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
