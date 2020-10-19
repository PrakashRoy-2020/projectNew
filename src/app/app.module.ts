import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { CommunityComponent } from './community/community.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddDetailComponent,
    EditDetailComponent,
    ShowDetailComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
