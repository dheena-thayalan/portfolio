import { Component, OnInit } from '@angular/core';
import { ProjectService } from './service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
   projectData:any[]=[];
  constructor(private service:ProjectService) { }

  ngOnInit(): void {
    this.projectData=this.service.ProjectData;
  }

}
