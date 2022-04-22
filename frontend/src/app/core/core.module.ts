import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { ValidatorsComponent } from './validators/validators.component';



@NgModule({
  declarations: [
    ServicesComponent,
    ValidatorsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
