import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WickedawesomepizzaComponent } from './wickedawesomepizza.component';

describe('WickedawesomepizzaComponent', () => {
  let component: WickedawesomepizzaComponent;
  let fixture: ComponentFixture<WickedawesomepizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WickedawesomepizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WickedawesomepizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
