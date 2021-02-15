import { ICell } from '../models/ICell';
import { IGrid } from '../models/IGrid';
import { DEFAULT_GRID_SIZE } from './defaults';

export const buildGrid = (gridSize: number, cellSize: number, showBorder: boolean, cell: ICell): IGrid => {
  const gSize = gridSize < 1 ? DEFAULT_GRID_SIZE : gridSize;

  const cells = Array.from(Array(gSize), () => {
    return Array.from(Array(gSize), () => {
      return cell;
    });
  });

  const grid: IGrid = {
    cells: cells,
    cellSize: cellSize,
    showBorder: showBorder
  }

  return grid;
};
