import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./page/login/login.component";
import { RegisterComponent } from "./page/register/register.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
