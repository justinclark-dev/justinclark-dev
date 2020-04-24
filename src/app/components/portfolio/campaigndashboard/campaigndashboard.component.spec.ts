import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaigndashboardComponent } from './campaigndashboard.component';

describe('CampaigndashboardComponent', () => {
  let component: CampaigndashboardComponent;
  let fixture: ComponentFixture<CampaigndashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaigndashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaigndashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
