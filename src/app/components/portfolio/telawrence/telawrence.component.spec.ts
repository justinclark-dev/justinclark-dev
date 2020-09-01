import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelawrenceComponent } from './telawrence.component';

describe('TelawrenceComponent', () => {
  let component: TelawrenceComponent;
  let fixture: ComponentFixture<TelawrenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelawrenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelawrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
