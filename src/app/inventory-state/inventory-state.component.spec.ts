import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStateComponent } from './inventory-state.component';

describe('InventoryStateComponent', () => {
  let component: InventoryStateComponent;
  let fixture: ComponentFixture<InventoryStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
