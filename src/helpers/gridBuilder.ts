import { ICell } from '../models/ICell';
import { DEFAULT_CELL, DEFAULT_GRID_SIZE } from './defaults';

const build = (size: number, cell: ICell): ICell[][] => {
  const gSize = size < 1 ? DEFAULT_GRID_SIZE : size;

  const grid = Array.from(Array(gSize), () => {
    return Array.from(Array(gSize), () => {
      return cell;
    });
  });

  return grid;
};

const resize = (size: number, grid: ICell[][]): ICell[][] => {
  if (size === grid.length || size < 1) {
    return grid;
  }

  // Increase grid size
  if (size > grid.length) {
    const largerGrid = build(size, DEFAULT_CELL);
    for (let index = 0; index < grid.length; index++) {
      for (let i = 0; i < grid[index].length; i++) {
        largerGrid[index][i] = grid[index][i];
      }
    }

    return largerGrid;
  }

  // Descrease grid size
  if (size < grid.length) {
    const gridCopy = [...grid];
    gridCopy.splice(size - 1, gridCopy.length - size);

    for (let index = 0; index < gridCopy.length; index++) {
      gridCopy[index].splice(size - 1, gridCopy[index].length - size);
    }

    return gridCopy;
  }

  return grid;
};

const GridBuilder = {
  build: (size: number, cell: ICell) => build(size, cell),
  resize: (size: number, grid: ICell[][]) => resize(size, grid),
};

export default GridBuilder;
