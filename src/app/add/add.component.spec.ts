import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddComponent]
    });
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test sum of two numbers',() => {
    const component = new AddComponent();
    const a:number = 5;
    const b:number = 5;
    const total:number = component.add(a,b)
    expect(total).toBe(10)
  })
});
