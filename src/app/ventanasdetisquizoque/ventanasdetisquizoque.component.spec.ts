import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanasdetisquizoqueComponent } from './ventanasdetisquizoque.component';

describe('VentanasdetisquizoqueComponent', () => {
  let component: VentanasdetisquizoqueComponent;
  let fixture: ComponentFixture<VentanasdetisquizoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanasdetisquizoqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanasdetisquizoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
