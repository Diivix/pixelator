import {
  SHOW_GRID_BORDER,
  ActionTypes
} from '../types';
// import { ITagOption } from '../../models/ITagOptions';
// import { ICharacter } from '../../models/ICharacter';
// import { ITokenPair } from '../../models/ITokenPair';

export const showGrid = (show: boolean): ActionTypes => {
  return {
    type: SHOW_GRID_BORDER,
    payload: show,
  };
};