import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostViewComponent } from './ghost-view.component';

describe('GhostViewComponent', () => {
  let component: GhostViewComponent;
  let fixture: ComponentFixture<GhostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
