import { Injectable } from '@angular/core';
import { Project } from '../project';
import { Projects } from '../mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  getProjects(): Project[] {
    return Projects
  }
  constructor() { }
}
