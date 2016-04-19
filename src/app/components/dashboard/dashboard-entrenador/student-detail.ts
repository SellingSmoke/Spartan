import { Component,Input } from 'angular2/core';
import { Student } from '../../../models/student';
import { Router } from 'angular2/router';
import { BeautifyProgessBarPipe, GoalNamePipe, GenderPipe } from '../../../pipes/student-pipes.pipe';

@Component({
  selector: 'student-detail',
  templateUrl: 'app/components/dashboard/dashboard-entrenador/student-detail.html',
  inputs: ['student'],
  pipes: [BeautifyProgessBarPipe, GoalNamePipe, GenderPipe]
})

export class StudentDetailComponent{

  @Input()
  student: Student;

  constructor(private _router: Router) {}

}
