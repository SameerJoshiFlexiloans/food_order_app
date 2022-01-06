import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxicanComponentComponent } from './maxican-component.component';

describe('MaxicanComponentComponent', () => {
  let component: MaxicanComponentComponent;
  let fixture: ComponentFixture<MaxicanComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxicanComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxicanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
