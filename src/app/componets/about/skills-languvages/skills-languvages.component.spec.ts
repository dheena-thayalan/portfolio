import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsLanguvagesComponent } from './skills-languvages.component';

describe('SkillsLanguvagesComponent', () => {
  let component: SkillsLanguvagesComponent;
  let fixture: ComponentFixture<SkillsLanguvagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsLanguvagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsLanguvagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
