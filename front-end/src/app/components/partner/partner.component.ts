import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/models/item-object';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  isDropdownOpen = false;
  username: any;
  partners: Partner[] = [];

  constructor(private dashboardService: DashboardService, private authService: AuthService) { }

  ngOnInit(): void {
    const token: string | null = localStorage.getItem('token');
    this.username = this.authService.extractUsernameFromToken(token);
    this.getAllPartners();
  }

  getAllPartners() {
    this.dashboardService.getAllPartners().subscribe(
      {
        next: (data) => this.partners = data,
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
}
