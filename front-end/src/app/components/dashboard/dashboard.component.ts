import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { every } from 'rxjs';
import { ComnpanyLinks } from 'src/app/models/item-object';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  title: any;
  imageName: any;
  topic: any;
  filesToUpload: File[] = [];



  ngOnInit(): void {
    console.log('title = ', this.title);

  }

  constructor(private dashboardService: DashboardService) {
  }

  onFileChange($event: any) {
    console.log('event = ', $event);
    this.imageName = $event?.target?.files[0]?.name;
    this.filesToUpload = $event.target?.files;
    console.log(' $event?.target?.files[0] = ', $event?.target?.files[0]);


  }

  submitItem(itemForm: NgForm) {

    const payload = new FormData();
    payload.append('file', this.filesToUpload[0]);
    payload.append('fileName', this.imageName);
    payload.append('title', itemForm?.value?.title);
    payload.append('topic', itemForm?.value?.topic);


    console.log('item form value =  ', itemForm?.value);
    this.dashboardService.submitItem(payload).subscribe(value => {
      console.log('value --------', value);
      this.clearForm(itemForm);
    });
  }


  clearForm(itemForm: NgForm) {
    itemForm.reset({
      'title': '',
      'topic': '',
      'image': ''
    });
  }


  submitGallery(galleryForm: NgForm) {

    const payload = new FormData();
    payload.append('file', this.filesToUpload[0]);
    payload.append('fileName', this.imageName);

    console.log('item form value =  ', galleryForm?.value);
    this.dashboardService.submitGallery(payload).subscribe(value => {
      console.log('value --------', value);
      this.clearForm(galleryForm);
    });
  }

  submitPartner(partnerForm: NgForm) {

    const payload = new FormData();
    payload.append('file', this.filesToUpload[0]);
    payload.append('fileName', this.imageName);

    console.log('item form value =  ', partnerForm?.value);
    this.dashboardService.submitPartner(payload).subscribe(value => {
      console.log('value --------', value);
      this.clearForm(partnerForm);
    });
  }

  submitLinks(linksForm: NgForm) {
    console.log('item form value =  ', linksForm?.value);

    const payload: ComnpanyLinks = { 
      facebookURL: linksForm?.value?.facebookURL,
      instagramURL: linksForm?.value?.instagramURL,
      linkedinURL: linksForm?.value?.linkedinURL,
      twitterURL: linksForm?.value?.twitterURL
    }

    this.dashboardService.submitLinks(payload).subscribe(value => {
      console.log('value --------', value);
      this.clearForm(linksForm);
    });
  }

}
