import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianComponentComponent } from './indian-component.component';

describe('IndianComponentComponent', () => {
  let component: IndianComponentComponent;
  let fixture: ComponentFixture<IndianComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
