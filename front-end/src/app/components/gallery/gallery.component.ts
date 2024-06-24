import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/item-object';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleries :Gallery[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
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

}
