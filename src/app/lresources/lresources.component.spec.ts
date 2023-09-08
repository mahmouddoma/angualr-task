import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LresourcesComponent } from './lresources.component';

describe('LresourcesComponent', () => {
  let component: LresourcesComponent;
  let fixture: ComponentFixture<LresourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LresourcesComponent],
    });
    fixture = TestBed.createComponent(LresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
