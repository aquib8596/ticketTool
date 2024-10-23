import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrentCategoryComponent } from './parrent-category.component';

describe('ParrentCategoryComponent', () => {
  let component: ParrentCategoryComponent;
  let fixture: ComponentFixture<ParrentCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParrentCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParrentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
