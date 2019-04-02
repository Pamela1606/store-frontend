import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateModelItemComponent } from './modal-create-model-item.component';

describe('ModalCreateModelItemComponent', () => {
  let component: ModalCreateModelItemComponent;
  let fixture: ComponentFixture<ModalCreateModelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateModelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateModelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
