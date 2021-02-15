import { ICell } from '../models/ICell';
import { IGrid } from '../models/IGrid';

export const SHOW_GRID_BORDER = 'SHOW_GRID_BORDER';
export const SET_GRID_SIZE = 'SET_GRID_SIZE';
export const SET_CELL_SIZE = 'SET_CELL_SIZE';
export const SET_CELL_ACTIVE_COLOR = 'SET_CELL_ACTIVE_COLOR';
export const SET_CELL_INACTIVE_COLOR = 'SET_CELL_INACTIVE_COLOR';
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

interface ISetCellInactiveColor {
  type: typeof SET_CELL_INACTIVE_COLOR;
  payload: string;
}

interface ISetGrid {
  type: typeof SET_GRID;
  payload: IGrid;
}

interface ISetCell {
  type: typeof SET_CELL;
  payload: { x: number, y: number, cell: ICell };
}

export type ActionTypes = IShowGridBorder | ISetGridSize | ISetCellSize | ISetCellActiveColor | ISetCellInactiveColor | ISetGrid | ISetCell;
