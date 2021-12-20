import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosIndexComponent } from './todos-index.component';

describe('TodosIndexComponent', () => {
  let component: TodosIndexComponent;
  let fixture: ComponentFixture<TodosIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
