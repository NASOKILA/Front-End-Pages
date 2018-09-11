import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpsComponent } from './alps.component';

describe('AlpsComponent', () => {
  let component: AlpsComponent;
  let fixture: ComponentFixture<AlpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
