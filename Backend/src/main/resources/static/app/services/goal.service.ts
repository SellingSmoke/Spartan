import { GOALS } from '../recursos-estaticos';
import { Goal } from '../models/goal.model';
import { Injectable } from 'angular2/core';

@Injectable()
export class GoalService {

  /**
     Devuelve las tareas de una meta de un alumno
  */

  getGoals(id: number) {
    let goals= Promise.resolve(GOALS).then(
      jGoals => {
        jGoals = jGoals.filter(goal => goal.student_id === id);
        return jGoals;
      }
    );
    return goals;
  }

}

export function parseArray(jGoals: Goal[]){
  var goals = new Array<Goal>();
  for(let goal of jGoals){
    goals.push(new Goal(goal.id, goal.type, goal.campo_metaX));
  }
  return goals;
}
