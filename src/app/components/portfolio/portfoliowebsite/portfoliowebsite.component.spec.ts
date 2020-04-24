import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliowebsiteComponent } from './portfoliowebsite.component';

describe('PortfoliowebsiteComponent', () => {
  let component: PortfoliowebsiteComponent;
  let fixture: ComponentFixture<PortfoliowebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoliowebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliowebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
