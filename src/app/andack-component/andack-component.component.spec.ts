import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndackComponentComponent } from './andack-component.component';

describe('AndackComponentComponent', () => {
  let component: AndackComponentComponent;
  let fixture: ComponentFixture<AndackComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndackComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndackComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
