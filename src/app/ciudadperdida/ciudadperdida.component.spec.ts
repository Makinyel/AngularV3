import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadperdidaComponent } from './ciudadperdida.component';

describe('CiudadperdidaComponent', () => {
  let component: CiudadperdidaComponent;
  let fixture: ComponentFixture<CiudadperdidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadperdidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiudadperdidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
