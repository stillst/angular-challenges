import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { CardType } from '../../model/card.model';
import { Student } from '../../model/student.model';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-student-card',
  template: `<app-card
    [list]="students"
    [type]="cardType"
    customClass="bg-light-green"></app-card>`,
  standalone: true,
  styles: [
    `
      ::ng-deep .bg-light-green {
        background-color: rgba(0, 250, 0, 0.1);
      }
    `,
  ],
  imports: [CardComponent],
})
export class StudentCardComponent {
  @Input()
  students: Student[] = [];

  cardType = CardType.STUDENT;
}
