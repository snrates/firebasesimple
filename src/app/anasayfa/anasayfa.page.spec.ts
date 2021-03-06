import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnasayfaPage } from './anasayfa.page';

describe('AnasayfaPage', () => {
  let component: AnasayfaPage;
  let fixture: ComponentFixture<AnasayfaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnasayfaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnasayfaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
