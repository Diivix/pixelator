import { IState } from '../../models/IState';
import { ActionTypes, SET_CELL_SIZE, SET_GRID_SIZE, SHOW_GRID_BORDER,  } from '../types';

export const initialState: IState = {
  showGridBorder: true,
  gridSize: 10,
  cellSize: 40
};

export const reducer = (state = initialState, action: ActionTypes): IState => {
  switch (action.type) {
    case SHOW_GRID_BORDER:
      return Object.assign({}, state, { showGridBorder: action.payload });
    case SET_GRID_SIZE:
      return Object.assign({}, state, { gridSize: action.payload });
      case SET_CELL_SIZE:
        return Object.assign({}, state, { cellSize: action.payload });
    default:
      return state;
  }
};
