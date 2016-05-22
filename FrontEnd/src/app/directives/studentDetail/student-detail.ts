import { Component,Input } from 'angular2/core';
import { User } from '../../models/user.model';
import { Router } from 'angular2/router';
import { BeautifyProgessBarPipe, GoalNamePipe, GenderPipe } from '../../pipes/student-pipes.pipe';

@Component({
  selector: 'student-detail',
  templateUrl: 'app/directives/studentDetail/student-detail.html',
  inputs: ['student'],
  pipes: [BeautifyProgessBarPipe, GoalNamePipe, GenderPipe]
})

export class StudentDetailComponent{

  @Input()
  student: User;

  constructor(private _router: Router) {}

}
