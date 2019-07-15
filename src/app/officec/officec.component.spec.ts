import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficecComponent } from './officec.component';

describe('OfficecComponent', () => {
  let component: OfficecComponent;
  let fixture: ComponentFixture<OfficecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
