import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiHeroListComponent } from './anti-hero-list.component';

describe('AntiHeroListComponent', () => {
  let component: AntiHeroListComponent;
  let fixture: ComponentFixture<AntiHeroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntiHeroListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
