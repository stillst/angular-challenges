import { OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { randomCity } from './data-access/fake-http.service';
import { randStudent } from './data-access/fake-http.service';
import { randTeacher } from './data-access/fake-http.service';
import { FakeHttpService } from './data-access/fake-http.service';
import { TeacherStore } from './data-access/teacher.store';
import { StudentStore } from './data-access/student.store';
import { CityStore } from './data-access/city.store';
import { Teacher } from './model/teacher.model';
import { Student } from './model/student.model';
import { City } from './model/city.model';

@Injectable()
export class AppFacade implements OnDestroy {
  readonly teachers$: Observable<Teacher[]> = this.teacherStore.teachers$;
  readonly students$: Observable<Student[]> = this.studentStore.students$;
  readonly cities$: Observable<City[]> = this.cityStore.cities$;

  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly http: FakeHttpService,
    private readonly teacherStore: TeacherStore,
    private readonly studentStore: StudentStore,
    private readonly cityStore: CityStore,
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPageData(): void {
    this.loadTeachers();
    this.loadStudents();
    this.loadCities();
  }

  addTeacher(): void {
    this.teacherStore.addOne(randTeacher());
  }

  deleteTeacher(id: number): void {
    this.teacherStore.deleteOne(id);
  }

  addStudent(): void {
    this.studentStore.addOne(randStudent());
  }

  deleteStudent(id: number): void {
    this.studentStore.deleteOne(id);
  }

  addCity(): void {
    this.cityStore.addOne(randomCity());
  }

  deleteCity(id: number): void {
    this.cityStore.deleteOne(id);
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

  private loadCities(): void {
    this.http.fetchCities$
      .pipe(takeUntil(this.destroy$))
      .subscribe((c: City[]) => this.cityStore.addAll(c));
  }
}
