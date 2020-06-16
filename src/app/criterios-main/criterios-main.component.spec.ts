import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriosMainComponent } from './criterios-main.component';

describe('CriteriosMainComponent', () => {
  let component: CriteriosMainComponent;
  let fixture: ComponentFixture<CriteriosMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriosMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
