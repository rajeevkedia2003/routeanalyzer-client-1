import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MazesComponent } from './mazes/mazes.component';
import { MazeStartComponent} from './mazes/maze-start/maze-start.component';
import { MazeDetailComponent } from './mazes/maze-detail/maze-detail.component';
import { MazeUserComponent } from './mazes/maze-user/maze-user.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/mazes', pathMatch: 'full' },
    { path: 'usermaze', component: MazeUserComponent },
	{ path: 'mazes', component: MazesComponent, children: [
      {path: '', component: MazeStartComponent },
      {path: ':id', component: MazeDetailComponent }
  	]},	
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
