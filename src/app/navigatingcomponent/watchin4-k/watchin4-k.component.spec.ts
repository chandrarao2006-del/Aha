import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Watchin4KComponent } from './watchin4-k.component';

describe('Watchin4KComponent', () => {
  let component: Watchin4KComponent;
  let fixture: ComponentFixture<Watchin4KComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Watchin4KComponent]
    });
    fixture = TestBed.createComponent(Watchin4KComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
