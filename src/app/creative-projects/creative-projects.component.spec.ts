import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeProjectsComponent } from './creative-projects.component';

describe('CreativeProjectsComponent', () => {
  let component: CreativeProjectsComponent;
  let fixture: ComponentFixture<CreativeProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativeProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
