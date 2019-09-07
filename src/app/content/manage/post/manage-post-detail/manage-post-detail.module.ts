import { NgModule } from '@angular/core';
import { ManagePostDetailComponent } from './manage-post-detail.component';
import { ButtonModule } from 'src/app/basic/button/button.module';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    ButtonModule,
    FileUploadModule
  ],
  exports: [ ManagePostDetailComponent ],
  declarations: []
})

export class ManagePostDetailModule { }
