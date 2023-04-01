import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.component';
import { UserService } from '../user.service';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [UserService],
  exports: [UserComponent]
})
export class UserModule { }