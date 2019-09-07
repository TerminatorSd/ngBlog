import { NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/basic/button/button.module';
import { AlertModule } from 'src/app/basic/alert/alert.module';


@NgModule({
  imports: [
    ButtonModule,
    AlertModule
  ],
  exports: [ ],
  declarations: []
})

export class ManagePostListModule { }
