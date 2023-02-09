import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CstButtonGroupComponent } from './button-group.component';

describe('ButtonGroupComponent', () => {
  let component: CstButtonGroupComponent;
  let fixture: ComponentFixture<CstButtonGroupComponent>;
  let buttonElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CstButtonGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CstButtonGroupComponent);
    component = fixture.componentInstance;
    let { debugElement } = fixture;
    buttonElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have class "cst-btn-group-horizontal" by default', () => {
    expect(buttonElement.className).toContain('cst-btn-group-horizontal');
  });

  it('should have class "cst-btn-group-vertical" when "cstGroupDirection" is vertical', () => {
    component.cstGroupDirection = 'vertical';
    fixture.detectChanges();
    expect(buttonElement.className).toContain('cst-btn-group-vertical');
  });
});
