import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiHeroCommandBarComponent } from './anti-hero-command-bar.component';

describe('AntiHeroCommandBarComponent', () => {
  let component: AntiHeroCommandBarComponent;
  let fixture: ComponentFixture<AntiHeroCommandBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntiHeroCommandBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiHeroCommandBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
