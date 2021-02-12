import { IState } from '../../models/IState';
import { ActionTypes, SHOW_GRID_BORDER } from '../types';

export const initialState: IState = {
  showGridBorder: true
};

export const reducer = (state = initialState, action: ActionTypes): IState => {
  switch (action.type) {
    case SHOW_GRID_BORDER:
      return Object.assign({}, state, { showGridBorder: action.payload });
    default:
      return state;
  }
};
