import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Maze } from '../../maze.model';

@Component({
  selector: 'app-maze-item',
  templateUrl: './maze-item.component.html',
  styleUrls: ['./maze-item.component.css']
})
export class MazeItemComponent implements OnInit {
  @Input() maze: Maze;
	@Input() index: number;
	
  constructor() { }

  ngOnInit() {
  }
  
}