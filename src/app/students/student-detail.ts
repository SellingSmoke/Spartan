import { Component,Input } from 'angular2/core';
import { Student } from '../students/student';
import { Router } from 'angular2/router';
import { BeautifyProgessBarPipe, GoalNamePipe } from './student-pipes.pipe';

@Component({
  selector: 'student-detail',
  templateUrl: 'app/students/student-detail.html',
  inputs: ['student'],
  pipes: [BeautifyProgessBarPipe, GoalNamePipe]
})

export class StudentDetailComponent{

  @Input()
  student: Student;

  constructor(private _router: Router) {}

}
