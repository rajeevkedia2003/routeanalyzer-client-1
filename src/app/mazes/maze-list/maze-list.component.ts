import { Component, OnInit } from '@angular/core';
import { Maze } from '../maze.model';
import { MazeService } from '../maze.service';

@Component({
  selector: 'app-maze-list',
  templateUrl: './maze-list.component.html',
  styleUrls: ['./maze-list.component.css']
})
export class MazeListComponent implements OnInit {
  mazes: Maze[];
  constructor(private mazeService: MazeService) { }

  ngOnInit() {
    this.mazes = this.mazeService.getMazes();
  }

}