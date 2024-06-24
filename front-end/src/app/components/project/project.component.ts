import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemObject } from 'src/app/models/item-object';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects :ItemObject[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getAllprojects();
  }

  getAllprojects() {
    this.dashboardService.getAllItems().subscribe(
      {
        next: (data) => this.projects = data,
        error: (e) => console.error(e),
        complete: () =>console.log("complete")
      });
  }

}
