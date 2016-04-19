import { TRAINERS } from '../recursos-estaticos';
import { Trainer } from '../models/trainer';
import { Injectable } from 'angular2/core';

@Injectable()
export class TrainerService {

  /**
     Devuelve todos los entrenadores
  */

  getTrainers() {
    return Promise.resolve(TRAINERS);
  }


}
