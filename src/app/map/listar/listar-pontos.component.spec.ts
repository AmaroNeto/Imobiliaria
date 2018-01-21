import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPontosComponent } from './listar-pontos.component';

describe('ListarPontosComponent', () => {
  let component: ListarPontosComponent;
  let fixture: ComponentFixture<ListarPontosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPontosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
