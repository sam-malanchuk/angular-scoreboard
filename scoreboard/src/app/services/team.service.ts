import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public teams: BehaviorSubject<TeamInfo[]>;

  constructor() { }
}
