import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../project';


@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  constructor() {

  }
  
  @Input() project: Project;


  
  ngOnInit(): void {
    
  }
}
