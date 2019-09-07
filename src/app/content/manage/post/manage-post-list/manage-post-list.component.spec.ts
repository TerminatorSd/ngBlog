import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePostListComponent } from './manage-post-list.component';

describe('ManagePostListComponent', () => {
  let component: ManagePostListComponent;
  let fixture: ComponentFixture<ManagePostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
