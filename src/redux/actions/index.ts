import {
  SHOW_GRID_BORDER,
  ActionTypes,
  SET_GRID_SIZE,
  SET_CELL_SIZE,
  SET_CELL_ACTIVE_COLOR,
  SET_CELL_INACTIVE_COLOR
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

export const setCellActiveColor = (color: string): ActionTypes => {
  return {
    type: SET_CELL_ACTIVE_COLOR,
    payload: color,
  };
};

export const setCellINactiveColor = (color: string): ActionTypes => {
  return {
    type: SET_CELL_INACTIVE_COLOR,
    payload: color,
  };
};