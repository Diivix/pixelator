import {
  DEFAULT_CELL_ACTIVE_COLOR,
  DEFAULT_GRID_BACKGROUND_COLOR,
  DEFAULT_CELL_SIZE,
  DEFAULT_GRID,
  DEFAULT_GRID_SIZE,
} from '../../helpers/defaults';
import GridBuilder from '../../helpers/gridBuilder';
import { IState } from '../../models/IState';
import {
  ActionTypes,
  SET_CELL,
  SET_CELL_ACTIVE_COLOR,
  SET_GRID_BACKGROUND_COLOR,
  SET_CELL_SIZE,
  SET_GRID,
  SET_GRID_SIZE,
  SHOW_GRID_BORDER,
} from '../types';

export const initialState: IState = {
  showGridBorder: true,
  gridSize: DEFAULT_GRID_SIZE,
  cellSize: DEFAULT_CELL_SIZE,
  cellActiveColor: DEFAULT_CELL_ACTIVE_COLOR,
  gridBackgroundColor: DEFAULT_GRID_BACKGROUND_COLOR,
  grid: DEFAULT_GRID,
};

export const reducer = (state = initialState, action: ActionTypes): IState => {
  switch (action.type) {
    case SHOW_GRID_BORDER:
      return Object.assign({}, state, { showGridBorder: action.payload });
    case SET_GRID_SIZE:
      const resizedGrid = GridBuilder.resize(action.payload, state.grid);
      return Object.assign({}, state, { gridSize: action.payload, grid: [...resizedGrid] });
    case SET_CELL_SIZE:
      return Object.assign({}, state, { cellSize: action.payload });
    case SET_CELL_ACTIVE_COLOR:
      return Object.assign({}, state, { cellActiveColor: action.payload });
    case SET_GRID_BACKGROUND_COLOR:
      // Shallow copy with behaviour that seems to mutate the cells. Is there a better way?
      const cellsbc = [...state.grid];
      cellsbc.forEach((x) => x.forEach((y) => (y.inactiveColor = action.payload)));
      return Object.assign({}, state, { gridBackgroundColor: action.payload, grid: cellsbc });
    case SET_GRID:
      return Object.assign({}, state, { grid: action.payload });
    case SET_CELL:
      // Shallow copy with behaviour that seems to mutate the cells. Is there a better way?
      const cells = [...state.grid];
      cells[action.payload.x][action.payload.y] = action.payload.cell;
      return Object.assign({}, state, { grid: state.grid });
    default:
      return state;
  }
};
