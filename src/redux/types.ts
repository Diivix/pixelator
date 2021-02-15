import { ICell } from '../models/ICell';

export const SHOW_GRID_BORDER = 'SHOW_GRID_BORDER';
export const SET_GRID_SIZE = 'SET_GRID_SIZE';
export const SET_CELL_SIZE = 'SET_CELL_SIZE';
export const SET_CELL_ACTIVE_COLOR = 'SET_CELL_ACTIVE_COLOR';
export const SET_GRID_BACKGROUND_COLOR = 'SET_GRID_BACKGROUND_COLOR';
export const SET_GRID = 'SET_GRID';
export const SET_CELL = 'SET_CELL';

interface IShowGridBorder {
  type: typeof SHOW_GRID_BORDER;
  payload: boolean;
}

interface ISetGridSize {
  type: typeof SET_GRID_SIZE;
  payload: number;
}

interface ISetCellSize {
  type: typeof SET_CELL_SIZE;
  payload: number;
}

interface ISetCellActiveColor {
  type: typeof SET_CELL_ACTIVE_COLOR;
  payload: string;
}

interface ISetGridBackgroundColor {
  type: typeof SET_GRID_BACKGROUND_COLOR;
  payload: string;
}

interface ISetGrid {
  type: typeof SET_GRID;
  payload: ICell[][];
}

interface ISetCell {
  type: typeof SET_CELL;
  payload: { x: number; y: number; cell: ICell };
}

export type ActionTypes =
  | IShowGridBorder
  | ISetGridSize
  | ISetCellSize
  | ISetCellActiveColor
  | ISetGridBackgroundColor
  | ISetGrid
  | ISetCell;
