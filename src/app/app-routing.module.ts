import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitComponent } from './exercices/git/git.component';

const routes: Routes = [
  { path: 'git', component: GitComponent },
  { path: '', pathMatch: 'full', redirectTo: 'git' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
