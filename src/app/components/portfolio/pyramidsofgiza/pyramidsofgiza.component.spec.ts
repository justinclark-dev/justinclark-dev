import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidsofgizaComponent } from './pyramidsofgiza.component';

describe('PyramidsofgizaComponent', () => {
  let component: PyramidsofgizaComponent;
  let fixture: ComponentFixture<PyramidsofgizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyramidsofgizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyramidsofgizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
