import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerPanelComponent } from './composer-panel.component';

describe('ComposerPanelComponent', () => {
  let component: ComposerPanelComponent;
  let fixture: ComponentFixture<ComposerPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposerPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
