import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndirectDepComponent } from './indirect-dep.component';

describe('IndirectDepComponent', () => {
  let component: IndirectDepComponent;
  let fixture: ComponentFixture<IndirectDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndirectDepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndirectDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
