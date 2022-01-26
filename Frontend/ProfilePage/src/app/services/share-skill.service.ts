import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Strengths } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ShareSkillService {

  private messageSource = new BehaviorSubject<Strengths>(undefined);
  currentSkill = this.messageSource.asObservable();

  constructor() { }

  shareSkill(skill: Strengths) {
    localStorage.setItem('skill', JSON.stringify(skill));
    this.messageSource.next(skill)
  }
}
