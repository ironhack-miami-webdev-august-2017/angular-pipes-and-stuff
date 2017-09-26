import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockSearchComponent } from './rock-search.component';

describe('RockSearchComponent', () => {
  let component: RockSearchComponent;
  let fixture: ComponentFixture<RockSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
