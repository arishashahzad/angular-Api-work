import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './user/create/create.component';
import { EditComponent } from './user/edit/edit.component';
import { IndexComponent } from './user/index/index.component';
import { ViewComponent} from './user/view/view.component';


const routes: Routes = [
  {path:'user',redirectTo:'user/index',pathMatch:"full"},
 {path:'user/index',component:IndexComponent},
 {path:'user/userid/view',component:ViewComponent},
 {path:'user/create',component:CreateComponent},
 {path:'user/:userid/edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
