import { Component, Inject, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  // standalone: true,
  styleUrls: ['./edit-gallery.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class EditGalleryComponent implements OnInit {

  imageName: any;
  filesToUpload: File[] = [];
  filename: any='';

  constructor(private dashboardService: DashboardService, public dialogRef: MatDialogRef<EditGalleryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    console.log(this.data);
    this.filename=this.data.file;

  }



  onFileChange($event: any) {
    this.imageName = $event?.target?.files[0]?.name;
    this.filesToUpload = $event.target?.files;
  }

  submitGallery(galleryForm: NgForm) {
    const payload = new FormData();
    payload.append('file', this.filesToUpload[0]);
    payload.append('fileName', this.imageName);
    payload.append('id', this.data.id );
    this.dashboardService.submitGallery(payload).subscribe(value => {
      this.clearForm(galleryForm);
      this.dialogRef.close({result: 'closeSuccess'});
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
