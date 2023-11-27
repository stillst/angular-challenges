import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { CardType } from '../../model/card.model';
import { Teacher } from '../../model/teacher.model';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-teacher-card',
  template: `<app-card
    [list]="teachers"
    [type]="cardType"
    customClass="bg-light-red">
  </app-card>`,
  styles: [
    `
      ::ng-deep .bg-light-red {
        background-color: rgba(250, 0, 0, 0.1);
      }
    `,
  ],
  standalone: true,
  imports: [CardComponent],
})
export class TeacherCardComponent {
  @Input()
  teachers: Teacher[] = [];

  cardType = CardType.TEACHER;
}
