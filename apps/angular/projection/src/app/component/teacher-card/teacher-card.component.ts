import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Teacher } from '../../model/teacher.model';
import { CardComponent } from '../../ui/card/card.component';
import { CardItemTmpDirective } from '../../ui/card/card-item-tmp.directive';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-teacher-card',
  templateUrl: 'teacher-card.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    NgOptimizedImage,
    CardItemTmpDirective,
    ListItemComponent,
  ],
})
export class TeacherCardComponent {
  @Input()
  teachers: Teacher[] = [];

  @Output()
  addTeacher: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  deleteTeacher: EventEmitter<number> = new EventEmitter<number>();

  readonly teacherCardColor: string = 'rgba(250, 0, 0, 0.1)';
}
