import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CstButtonColor } from '../../types/button-color.type';
import { CstButtonSize } from '../../types/button-size.type';
import { CstButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: CstButtonComponent;
  let fixture: ComponentFixture<CstButtonComponent>;
  let buttonElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestButtonComponent, CstButtonComponent],
    });
    fixture = TestBed.createComponent(TestButtonComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.debugElement.query(
      By.directive(CstButtonComponent)
    ).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have attribute "cst-btn" ', () => {
    expect(buttonElement.hasAttribute('cst-btn')).toBeTrue();
  });

  it('should have text', () => {
    expect(buttonElement.textContent).toContain('Button');
  });

  it('should have primary color', () => {
    expect(buttonElement.className).toContain('cst-btn-color-primary');
  });

  it('should have small size', () => {
    expect(buttonElement.className).toContain('cst-btn-size-small');
  });

  it('should add classes based on input values', () => {
    component.cstSize = 'medium';
    fixture.detectChanges();
    expect(buttonElement.className).toContain('cst-btn-size-medium');

    component.cstSize = 'small';
    fixture.detectChanges();
    expect(buttonElement.className).toContain('cst-btn-size-small');

    component.cstColor = 'basic';
    fixture.detectChanges();
    expect(buttonElement.className).toContain('cst-btn-color-basic');

    component.cstColor = 'primary';
    fixture.detectChanges();
    expect(buttonElement.className).toContain('cst-btn-color-primary');

    component.cstColor = 'secondary';
    fixture.detectChanges();
    expect(buttonElement.className).toContain('cst-btn-color-secondary');
  });

  it('should have filter css property if disabled', () => {
    expect(getComputedStyle(buttonElement).filter).toBeDefined();
  });

  it('should not to have filter css property if disabled', () => {
    component.disabled = false;
    fixture.detectChanges();
    expect(getComputedStyle(buttonElement).filter).toEqual('none');
  });
});

@Component({
  template: `
    <button
      cst-btn
      [cstColor]="cstColor"
      [cstSize]="cstSize"
      [disabled]="disabled"
    >
      Button
    </button>
  `,
})
export class TestButtonComponent {
  @Input() cstColor: CstButtonColor = 'primary';
  @Input() cstSize: CstButtonSize = 'small';
  @Input() disabled: boolean = true;
}
