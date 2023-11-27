import { OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { FakeHttpService } from './data-access/fake-http.service';
import { TeacherStore } from './data-access/teacher.store';
import { StudentStore } from './data-access/student.store';
import { Teacher } from './model/teacher.model';
import { Student } from './model/student.model';

@Injectable()
export class AppFacade implements OnDestroy {
  readonly teachers: Observable<Teacher[]> = this.teacherStore.teachers$;
  readonly students: Observable<Student[]> = this.studentStore.students$;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly http: FakeHttpService,
    private readonly teacherStore: TeacherStore,
    private readonly studentStore: StudentStore,
  ) {}

  loadPageData(): void {
    this.loadTeachers();
    this.loadStudents();
  }

  private loadTeachers(): void {
    this.http.fetchTeachers$
      .pipe(takeUntil(this.destroy$))
      .subscribe((t: Teacher[]) => this.teacherStore.addAll(t));
  }

  private loadStudents(): void {
    this.http.fetchStudents$
      .pipe(takeUntil(this.destroy$))
      .subscribe((s: Student[]) => this.studentStore.addAll(s));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
