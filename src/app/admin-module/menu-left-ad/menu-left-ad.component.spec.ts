import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLeftAdComponent } from './menu-left-ad.component';

describe('MenuLeftAdComponent', () => {
  let component: MenuLeftAdComponent;
  let fixture: ComponentFixture<MenuLeftAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLeftAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLeftAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
