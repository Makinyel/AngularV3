import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevadodelruizComponent } from './nevadodelruiz.component';

describe('NevadodelruizComponent', () => {
  let component: NevadodelruizComponent;
  let fixture: ComponentFixture<NevadodelruizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NevadodelruizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevadodelruizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
