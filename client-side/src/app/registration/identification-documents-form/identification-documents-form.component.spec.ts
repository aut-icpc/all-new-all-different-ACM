import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationDocumentsFormComponent } from './identification-documents-form.component';

describe('IdentificationDocumentsFormComponent', () => {
  let component: IdentificationDocumentsFormComponent;
  let fixture: ComponentFixture<IdentificationDocumentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificationDocumentsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificationDocumentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
