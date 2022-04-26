import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { ValidatorsComponent } from './validators/validators.component';
import { UserTypePipe } from './pipes/user-type.pipe';

@NgModule({
  declarations: [ServicesComponent, ValidatorsComponent, UserTypePipe],
  imports: [CommonModule],
  exports: [UserTypePipe],
})
export class CoreModule {}
