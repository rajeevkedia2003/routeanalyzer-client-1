import { MazeElement } from './maze-element.model';

export class Maze {
	
	constructor(public name: string,
				public mazeElements: string[][],
				public totalStepsToSolve: number) {}

}