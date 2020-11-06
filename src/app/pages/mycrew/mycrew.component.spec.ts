import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycrewComponent } from './mycrew.component';

describe('MycrewComponent', () => {
  let component: MycrewComponent;
  let fixture: ComponentFixture<MycrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
