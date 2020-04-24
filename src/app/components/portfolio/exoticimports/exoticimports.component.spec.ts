import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticimportsComponent } from './exoticimports.component';

describe('ExoticimportsComponent', () => {
  let component: ExoticimportsComponent;
  let fixture: ComponentFixture<ExoticimportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoticimportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoticimportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
