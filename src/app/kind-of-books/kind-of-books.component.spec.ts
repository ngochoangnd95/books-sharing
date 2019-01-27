import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindOfBooksComponent } from './kind-of-books.component';

describe('KindOfBooksComponent', () => {
  let component: KindOfBooksComponent;
  let fixture: ComponentFixture<KindOfBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindOfBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindOfBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
