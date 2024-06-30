import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  imageName: any;
  filesToUpload: File[] = [];
  filename: any = '';
  titleEn: any;
  titleAr: any;
  topicEn: any;
  topicAr: any;

  constructor(private dashboardService: DashboardService, public dialogRef: MatDialogRef<EditProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.filename = this.data.file;
    this.titleEn= this.data.titleEn;
    this.titleAr= this.data.titleAr;
    this.topicAr= this.data.topicAr;
    this.topicEn= this.data.topicEn;

  }

  onFileChange($event: any) {
    this.imageName = $event?.target?.files[0]?.name;
    this.filesToUpload = $event.target?.files;
  }

  submitItem(itemForm: NgForm) {
    const payload = new FormData();
    payload.append('file', this.filesToUpload[0]);
    payload.append('fileName', this.imageName);
    payload.append('titleEn', itemForm?.value?.titleEn);
    payload.append('titleAr', itemForm?.value?.titleAr);
    payload.append('topicEn', itemForm?.value?.topicEn);
    payload.append('topicAr', itemForm?.value?.topicAr);
    payload.append('id', this.data.id);

    // console.log('item form value =  ', itemForm?.value);
    this.dashboardService.submitItem(payload).subscribe(value => {
      // console.log('value --------', value);
      this.clearForm(itemForm);
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
