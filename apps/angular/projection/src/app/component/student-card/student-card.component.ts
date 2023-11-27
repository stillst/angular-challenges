import { NgOptimizedImage } from '@angular/common';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Student } from '../../model/student.model';
import { CardItemTmpDirective } from '../../ui/card/card-item-tmp.directive';
import { ListItemComponent } from '../../ui/list-item/list-item.component';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-student-card',
  templateUrl: 'student-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CardComponent,
    NgIf,
    NgOptimizedImage,
    ListItemComponent,
    CardItemTmpDirective,
  ],
})
export class StudentCardComponent {
  @Input()
  students: Student[] = [];

  @Output()
  addStudent: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  deleteStudent: EventEmitter<number> = new EventEmitter<number>();

  readonly cityCardColor: string = 'rgba(0, 250, 0, 0.1)';
}
