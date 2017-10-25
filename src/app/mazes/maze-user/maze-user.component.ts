import { Component, OnInit } from '@angular/core';

import { Maze } from '../maze.model';
import { MazeService } from '../maze.service';

@Component({
  selector: 'app-maze-user',
  templateUrl: './maze-user.component.html',
  styleUrls: ['./maze-user.component.css'],
  providers: [MazeService]
})
export class MazeUserComponent implements OnInit {
  udMaze: string="";
  maze: Maze;
  
  constructor(public mazeService: MazeService) {  	
  }

  ngOnInit() {
  	this.maze = new Maze('User Defined', [[]], 0);
  }

  solveMaze(udMaze: string) {
  	console.log(udMaze);
  	var udMazeElements = [[]];
  	udMazeElements[0] = [];
  	var indexX = 0;
  	var indexY = 0;
  	for (var i=0; i< udMaze.length; i++) {
  		if (/\s/.test(udMaze.charAt(i))) {
  			indexX ++;
  			indexY = 0;
  			udMazeElements[indexX]=[];
  		} else {
  			udMazeElements[indexX][indexY++] = udMaze.charAt(i);
  		}  		
  	}
  	this.maze.mazeElements = udMazeElements;
  	this.mazeService.solveMaze(this.maze)
  		.subscribe(
	        (response) => 
	        	{ 
	        		this.maze.totalStepsToSolve = JSON.parse(response['_body']).numberOfSteps; 
	        		var mazeElements = udMazeElements;
	        		mazeElements = this.mazeService.transformStringShortestPathToMazeEl(<string[][]>mazeElements, JSON.parse(response['_body']).shortestPath);        		
	        		this.maze.mazeElements = mazeElements;
	        	},
	        (error) => console.log(error)
	      );
  }
}
