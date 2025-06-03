import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitComponent } from './exercices/git/git.component';
import { StandaloneComponent } from './exercices/standalone/standalone.component';

const routes: Routes = [
  { path: 'git', component: GitComponent },
  { path: 'standalone', component: StandaloneComponent },
  { path: '', pathMatch: 'full', redirectTo: 'git' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
