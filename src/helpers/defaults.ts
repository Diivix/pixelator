import { ICell } from '../models/ICell';
import GridBuilder from './gridBuilder';

// Grid sizes are the number of cells across the x and y axis.
export const DEFAULT_GRID_SIZE: number = 15;
export const DEFAULT_GRID_SIZES: number[] = [10, 15, 20, 25, 30, 35, 40];
// Cell sizes are in pixels.
export const DEFAULT_CELL_SIZE: number = 30;
export const DEFAULT_CELL_SIZES: number[] = [10, 15, 20, 25, 30, 35, 40];
export const DEFAULT_TEXT_COLOR: string = '#f7f7f7';
export const DEFAULT_BACKGROUND_COLOR: string = '#282c34';
export const DEFAULT_CELL_ACTIVE_COLOR: string = '#ff9800';
export const DEFAULT_GRID_BACKGROUND_COLOR: string = DEFAULT_BACKGROUND_COLOR;
export const DEFAULT_CELL_BORDER_COLOR: string = '#4e5259';

export const DEFAULT_CELL: ICell = {
  isActive: false,
  activeColor: DEFAULT_CELL_ACTIVE_COLOR,
  inactiveColor: DEFAULT_GRID_BACKGROUND_COLOR,
};
export const DEFAULT_GRID: ICell[][] = GridBuilder.build(DEFAULT_GRID_SIZE, DEFAULT_CELL);

export const DEFAULT_COLOR_PICKER_PALLET: string[] = [
  '#ff1744',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  DEFAULT_CELL_ACTIVE_COLOR,
  '#ff5722',
  '#FFDBAC',
  '#795548',
  '#533D35',
  DEFAULT_CELL_BORDER_COLOR,
  DEFAULT_BACKGROUND_COLOR,
  '#607d8b',
  DEFAULT_TEXT_COLOR,
  '#000000',
];
