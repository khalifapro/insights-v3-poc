import { Injectable } from '@angular/core';
import { Project } from '../project';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }
  private apiURL = "http://localhost:5000/projects"
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiURL)
  }
}
