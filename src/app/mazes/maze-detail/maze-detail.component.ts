import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Maze } from '../maze.model';
import { MazeService } from '../maze.service';
import { MazeElement } from '../maze-element.model';

@Component({
  selector: 'app-maze-detail',
  templateUrl: './maze-detail.component.html',
  styleUrls: ['./maze-detail.component.css']
})
export class MazeDetailComponent implements OnInit {
  maze:Maze;
  id: number;
  
  constructor(private mazeService: MazeService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.
  		subscribe(
  			(params: Params) => {
  				this.id = +params['id'];
  				this.maze = this.mazeService.getMaze(this.id);
  			}
  		);
  }

  solveMaze() {
    this.mazeService.solveMaze(this.maze)
      .subscribe(
        (response) => 
        	{ 
        		this.maze.totalStepsToSolve = JSON.parse(response['_body']).numberOfSteps; 
        		var mazeElements = this.mazeService.getMaze(this.id).mazeElements;
        		this.maze.mazeElements = this.mazeService.transformStringShortestPathToMazeEl(mazeElements, JSON.parse(response['_body']).shortestPath);
        		this.mazeService.updateMaze(this.id, new Maze(this.maze.name, this.maze.mazeElements, this.maze.totalStepsToSolve));
        	},
        (error) => console.log(error)
      );
  }


}
