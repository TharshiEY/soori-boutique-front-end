import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllComponentComponent } from './view-all-component.component';

describe('ViewAllComponentComponent', () => {
  let component: ViewAllComponentComponent;
  let fixture: ComponentFixture<ViewAllComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
