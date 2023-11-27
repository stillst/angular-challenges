import { AsyncPipe } from '@angular/common';
import { Self } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CityCardComponent } from './component/city-card/city-card.component';
import { StudentCardComponent } from './component/student-card/student-card.component';
import { TeacherCardComponent } from './component/teacher-card/teacher-card.component';
import { AppFacade } from './app.facade';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  providers: [AppFacade],
  imports: [
    TeacherCardComponent,
    StudentCardComponent,
    CityCardComponent,
    AsyncPipe,
  ],
})
export class AppComponent implements OnInit {
  constructor(@Self() protected facade: AppFacade) {}

  ngOnInit(): void {
    this.facade.loadPageData();
  }
}
