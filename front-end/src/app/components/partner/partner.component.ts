import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/models/item-object';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { EditPartnerComponent } from './edit-partner/edit-partner.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  isDropdownOpen = false;
  username: any;
  partners: Partner[] = [];

  constructor(private dialog: MatDialog,private dashboardService: DashboardService, private authService: AuthService) { }

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

  openDialog(g: Partner): void {
    const dialogRef = this.dialog.open(EditPartnerComponent, {
      width: '500px',
      data: { id: g.id, fileName: g.fileName, file: g.image },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.result == 'closeSuccess') {
        this.getAllPartners();
      }
    });
  }

  deleteOne(id: any) {
    this.dashboardService.deleteOne(id , 'PARTNER').subscribe(data => {
      this.getAllPartners();
    })
  }
}
