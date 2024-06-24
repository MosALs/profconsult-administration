import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/models/item-object';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  partners :Partner[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getAllPartners();
  }

  getAllPartners() {
    this.dashboardService.getAllPartners().subscribe(
      {
        next: (data) => this.partners = data,
        error: (e) => console.error(e),
        complete: () =>console.log("complete")
      });
  }


}
