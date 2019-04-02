import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearCategoryComponent } from './modal-crear-category.component';

describe('ModalCrearCategoryComponent', () => {
  let component: ModalCrearCategoryComponent;
  let fixture: ComponentFixture<ModalCrearCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCrearCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrearCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
