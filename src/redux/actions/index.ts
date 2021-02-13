import {
  SHOW_GRID_BORDER,
  ActionTypes,
  SET_GRID_SIZE,
  SET_CELL_SIZE
} from '../types';

export const showGrid = (show: boolean): ActionTypes => {
  return {
    type: SHOW_GRID_BORDER,
    payload: show,
  };
};

export const setGridSize = (size: number): ActionTypes => {
  return {
    type: SET_GRID_SIZE,
    payload: size,
  };
};

export const setCellSize = (size: number): ActionTypes => {
  return {
    type: SET_CELL_SIZE,
    payload: size,
  };
};