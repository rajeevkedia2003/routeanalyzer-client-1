import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MazesComponent } from './mazes/mazes.component';
import { MazeStartComponent } from './mazes/maze-start/maze-start.component';
import { MazeListComponent } from './mazes/maze-list/maze-list.component';
import { MazeItemComponent } from './mazes/maze-list/maze-item/maze-item.component';
import { MazeDetailComponent } from './mazes/maze-detail/maze-detail.component';
import { HeaderComponent } from './header/header.component';
import { MazeUserComponent } from './mazes/maze-user/maze-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MazesComponent,
    MazeStartComponent,
    MazeListComponent,
    MazeItemComponent,
    MazeDetailComponent,
    HeaderComponent,
    MazeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
