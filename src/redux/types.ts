// import { ITagOption } from "../models/ITagOptions";
// import { ICharacter } from "../models/ICharacter";
// import { ITokenPair } from "../models/ITokenPair";

export const SHOW_GRID_BORDER = 'SHOW_GRID_BORDER';
export const SET_GRID_SIZE = 'SET_GRID_SIZE';
export const SET_CELL_SIZE = 'SET_CELL_SIZE';

interface IShowGridBorder {
  type: typeof SHOW_GRID_BORDER,
  payload: boolean
}

interface ISetGridSize {
  type: typeof SET_GRID_SIZE,
  payload: number
}

interface ISetCellSize {
  type: typeof SET_CELL_SIZE,
  payload: number
}

export type ActionTypes = IShowGridBorder | ISetGridSize | ISetCellSize;
