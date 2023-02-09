import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CstButtonColor } from './types/button-color.type';
import { CstButtonSize } from './types/button-size.type';

@Component({
  selector: 'button[cst-btn]',
  template: `<span icon>&#9733;</span><ng-content></ng-content> `,
  styleUrls: ['./style/index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.cst-btn-size-medium]': `cstSize === 'medium' `,
    '[class.cst-btn-size-small]': `cstSize === 'small' `,
    '[class.cst-btn-color-basic]': `cstColor === 'basic' `,
    '[class.cst-btn-color-primary]': `cstColor === 'primary' `,
    '[class.cst-btn-color-secondary]': `cstColor === 'secondary' `,
    '[attr.disabled]': 'disabled || null ',
  },
})
export class CstButtonComponent implements OnInit {
  @Input() cstColor: CstButtonColor = 'basic';
  @Input() cstSize: CstButtonSize = 'medium';
  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
