import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListComponent } from './my-list.component';

describe('MyListComponent', () => {
  let component: MyListComponent;
  let fixture: ComponentFixture<MyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate items', () => {
    fixture.componentInstance.items = [
      {
        key: 'one',
        value: 'one'
      }, {
        key: 'two',
        value: 'Two'
      }
    ];

    expect(component.items.length).toBe(2);
  });
});
