import { ICell } from "./ICell";

export interface IState {
  showGridBorder: boolean;
  gridSize: number;
  cellSize: number;
  cellActiveColor: string;
  gridBackgroundColor: string;
  grid: ICell[][];
}
