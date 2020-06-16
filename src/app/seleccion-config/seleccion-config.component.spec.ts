import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionConfigComponent } from './seleccion-config.component';

describe('SeleccionConfigComponent', () => {
  let component: SeleccionConfigComponent;
  let fixture: ComponentFixture<SeleccionConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
