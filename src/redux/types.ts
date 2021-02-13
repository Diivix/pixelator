export const SHOW_GRID_BORDER = 'SHOW_GRID_BORDER';
export const SET_GRID_SIZE = 'SET_GRID_SIZE';
export const SET_CELL_SIZE = 'SET_CELL_SIZE';
export const SET_CELL_ACTIVE_COLOR = 'SET_CELL_ACTIVE_COLOR';
export const SET_CELL_INACTIVE_COLOR = 'SET_CELL_INACTIVE_COLOR';

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

export type ActionTypes = IShowGridBorder | ISetGridSize | ISetCellSize | ISetCellActiveColor | ISetCellInactiveColor;
