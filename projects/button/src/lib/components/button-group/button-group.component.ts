import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CstButtonGroupDirection } from '../../types/button-group.direction.type';

@Component({
  selector: 'cst-button-group',
  template: `<ng-content></ng-content> `,
  styleUrls: ['../../style/index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.cst-btn-group-vertical]': `cstGroupDirection === 'vertical' `,
    '[class.cst-btn-group-horizontal]': `cstGroupDirection === 'horizontal' `,
  },
})
export class CstButtonGroupComponent {
  @Input() cstGroupDirection: CstButtonGroupDirection = 'horizontal';
}
