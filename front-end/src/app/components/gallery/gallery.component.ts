import { Component, HostListener, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/item-object';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  isDropdownOpen = false;
  username: any;
  galleries :Gallery[] = [];

  constructor(private dashboardService: DashboardService, private authService: AuthService) { }

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
        complete: () =>console.log("complete")
      });
  }

  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.authService.logout()
  }

}
