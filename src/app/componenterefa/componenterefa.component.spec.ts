import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenterefaComponent } from './componenterefa.component';

describe('ComponenterefaComponent', () => {
  let component: ComponenterefaComponent;
  let fixture: ComponentFixture<ComponenterefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenterefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenterefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
