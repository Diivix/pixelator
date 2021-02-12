// import { ITagOption } from "../models/ITagOptions";
// import { ICharacter } from "../models/ICharacter";
// import { ITokenPair } from "../models/ITokenPair";

export const SHOW_GRID_BORDER = 'SHOW_GRID_BORDER';


interface IShowGridBorder {
  type: typeof SHOW_GRID_BORDER,
  payload: boolean
}


export type ActionTypes = IShowGridBorder;