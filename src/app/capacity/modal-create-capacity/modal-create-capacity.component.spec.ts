import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateCapacityComponent } from './modal-create-capacity.component';

describe('ModalCreateCapacityComponent', () => {
  let component: ModalCreateCapacityComponent;
  let fixture: ComponentFixture<ModalCreateCapacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateCapacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
