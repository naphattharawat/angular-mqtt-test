import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { PublishComponent } from './publish/publish.component';

const routes: Routes = [
  { path: '', redirectTo: 'subscribe', pathMatch: 'full' },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'publish', component: PublishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
