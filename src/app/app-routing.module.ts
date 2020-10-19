import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { CommunityComponent } from './community/community.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { ListComponent } from './list/list.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';


const routes: Routes = [
  {path:'list',component:ListComponent},
  {path:'detail',component:AddDetailComponent},
  {path:'update/:id',component:EditDetailComponent},
  {path:'detail/:id',component:ShowDetailComponent},
  {path:'comm',component:CommunityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
