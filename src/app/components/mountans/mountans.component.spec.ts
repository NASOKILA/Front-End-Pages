import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountansComponent } from './mountans.component';

describe('MountansComponent', () => {
  let component: MountansComponent;
  let fixture: ComponentFixture<MountansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
