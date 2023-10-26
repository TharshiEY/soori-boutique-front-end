import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductComponentComponent } from './view-product-component.component';

describe('ViewProductComponentComponent', () => {
  let component: ViewProductComponentComponent;
  let fixture: ComponentFixture<ViewProductComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
