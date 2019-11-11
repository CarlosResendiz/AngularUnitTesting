import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from '../hero/hero.component';
import { IterableChangeRecord_ } from '@angular/core/src/change_detection/differs/default_iterable_differ';

describe('HeroComponent (shallow tests)', () => {
  let fixture: ComponentFixture<HeroComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent]
    });
    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };

    expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
  });
});
