import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';


const routes: Routes = [
  {
    path: 'developer',
    children: [
      { path: "documentation", component: HomeComponent },
      {
        path: "en/api/:card",
        children: [
          { path: 'intro', component: CommonComponent },
          { path: 'guide', component: CommonComponent },
          { path: 'reference', component: CommonComponent },
        ]
      }
    ]
  },
  { path: '', redirectTo: '/developer/documentation', pathMatch: 'full' },
  { path: '**', redirectTo: '/developer/documentation', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
