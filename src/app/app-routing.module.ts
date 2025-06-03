import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitComponent } from './exercices/git/git.component';
import { StandaloneComponent } from './exercices/standalone/standalone.component';
import { CustomComponent } from './exercices/custom/custom.component';
import { BugsComponent } from './exercices/bugs/bugs.component';

const routes: Routes = [
  { path: 'git', component: GitComponent },
  { path: 'standalone', component: StandaloneComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'bugs', component: BugsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'git' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
