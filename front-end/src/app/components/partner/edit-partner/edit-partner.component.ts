import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-edit-partner',
  templateUrl: './edit-partner.component.html',
  styleUrls: ['./edit-partner.component.css']
})
export class EditPartnerComponent implements OnInit {

  imageName: any;
  filesToUpload: File[] = [];
  filename: any = '';

  constructor(private dashboardService: DashboardService, public dialogRef: MatDialogRef<EditPartnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.filename = this.data.file;

  }

  onFileChange($event: any) {
    this.imageName = $event?.target?.files[0]?.name;
    this.filesToUpload = $event.target?.files;
  }

  submitPartner(galleryForm: NgForm) {
    const payload = new FormData();
    payload.append('file', this.filesToUpload[0]);
    payload.append('fileName', this.imageName);
    payload.append('id', this.data.id);
    this.dashboardService.submitPartner(payload).subscribe(value => {
      this.clearForm(galleryForm);
      this.dialogRef.close({ result: 'closeSuccess' });
    });
  }

  clearForm(itemForm: NgForm) {
    itemForm.reset({
      'title': '',
      'topic': '',
      'image': ''
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
