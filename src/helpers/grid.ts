import { ICell } from '../models/ICell';
import { DEFAULT_GRID_SIZE } from './defaults';

export const buildGrid = (gridSize: number, cellSize: number, showBorder: boolean, cell: ICell): ICell[][] => {
  const gSize = gridSize < 1 ? DEFAULT_GRID_SIZE : gridSize;

  const grid = Array.from(Array(gSize), () => {
    return Array.from(Array(gSize), () => {
      return cell;
    });
  });

  return grid;
};
