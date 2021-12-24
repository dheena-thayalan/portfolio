import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationCertificationComponent } from './qualification-certification.component';

describe('QualificationCertificationComponent', () => {
  let component: QualificationCertificationComponent;
  let fixture: ComponentFixture<QualificationCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
