import { Component, HostListener, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Gallery } from 'src/app/models/item-object';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { EditGalleryComponent } from './edit-gallery/edit-gallery.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  isDropdownOpen = false;
  username: any;
  galleries: Gallery[] = [];

  constructor(private dialog: MatDialog, private dashboardService: DashboardService, private authService: AuthService) { }

  ngOnInit(): void {
    const token: string | null = localStorage.getItem('token');
    this.username = this.authService.extractUsernameFromToken(token);
    this.getAllGalleries();
  }

  getAllGalleries() {
    this.dashboardService.getAllGalleries().subscribe(
      {
        next: (data) => this.galleries = data,
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

  openDialog(g: Gallery): void {
    const dialogRef = this.dialog.open(EditGalleryComponent, {
      width: '500px',
      data: { id: g.id, fileName: g.fileName, file: g.image },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.result == 'closeSuccess') {
        this.getAllGalleries();
      }
    });
  }

  deleteOne(id: any) {
    this.dashboardService.deleteOne(id , 'GALLERY').subscribe(data => {
      this.getAllGalleries();
    })
  }

}
