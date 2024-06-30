import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemObject } from 'src/app/models/item-object';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  isDropdownOpen = false;
  username: any;
  projects: ItemObject[] = [];

  constructor(private dialog: MatDialog, private dashboardService: DashboardService, private authService: AuthService) { }

  ngOnInit(): void {
    const token: string | null = localStorage.getItem('token');
    this.username = this.authService.extractUsernameFromToken(token);
    this.getAllprojects();
  }

  getAllprojects() {
    this.dashboardService.getAllItems().subscribe(
      {
        next: (data) => this.projects = data,
        error: (e) => console.error(e),
        complete: () => console.log("complete")
      });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.authService.logout()
  }

  openDialog(g: ItemObject): void {
    const dialogRef = this.dialog.open(EditProjectComponent, {
      width: '500px',
      data: {
        id: g.id, fileName: g.fileName, file: g.image, titleEn: g.titleEn,
        titleAr: g.titleAr, topicEn: g.topicEn, topicAr: g.topicAr
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.result == 'closeSuccess') {
        this.getAllprojects();
      }
    });
  }

  deleteOne(id: any) {
    this.dashboardService.deleteOne(id, 'PROJECT').subscribe(data => {
      this.getAllprojects();
    })
  }

}
