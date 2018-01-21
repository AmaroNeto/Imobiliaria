import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPontosComponent } from './detail-pontos.component';

describe('DetailPontosComponent', () => {
  let component: DetailPontosComponent;
  let fixture: ComponentFixture<DetailPontosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPontosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
