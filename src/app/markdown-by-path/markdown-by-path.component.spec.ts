import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownByPathComponent } from './markdown-by-path.component';

describe('MarkdownByPathComponent', () => {
  let component: MarkdownByPathComponent;
  let fixture: ComponentFixture<MarkdownByPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownByPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownByPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
