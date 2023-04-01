import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [AppComponent,UserComponent],
  imports: [BrowserModule, FormsModule,HttpClientModule,CommonModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
