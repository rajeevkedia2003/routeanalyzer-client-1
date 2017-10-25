import { Component, OnInit } from '@angular/core';

import { MazeService } from './maze.service';

@Component({
  selector: 'app-mazes',
  templateUrl: './mazes.component.html',
  styleUrls: ['./mazes.component.css'],
  providers: [MazeService]
})
export class MazesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}