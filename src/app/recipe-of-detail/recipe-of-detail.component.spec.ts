import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeOfDetailComponent } from './recipe-of-detail.component';

describe('RecipeOfDetailComponent', () => {
  let component: RecipeOfDetailComponent;
  let fixture: ComponentFixture<RecipeOfDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeOfDetailComponent]
    });
    fixture = TestBed.createComponent(RecipeOfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
