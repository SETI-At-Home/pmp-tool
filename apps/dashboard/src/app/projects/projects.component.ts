import { ProjectsService } from './../../../../../libs/core-data/src/lib/projects/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.projects = this.projectService.all();
  }

  cancel() {
    this.selectProject(null);
  }
}
