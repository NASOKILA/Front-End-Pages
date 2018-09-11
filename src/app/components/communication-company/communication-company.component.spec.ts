import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationCompanyComponent } from './communication-company.component';

describe('CommunicationCompanyComponent', () => {
  let component: CommunicationCompanyComponent;
  let fixture: ComponentFixture<CommunicationCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
