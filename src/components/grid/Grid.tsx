import React from 'react';
import { useSelector } from 'react-redux';
import { DEFAULT_CELL_SIZE, DEFAULT_GRID_SIZE } from '../../helpers/defaults';
import { IState } from '../../models/IState';
import GridCell from '../grid-cell/GridCell';
import './Grid.css';

interface IProps { }

function Grid(props: IProps) {
  const state = useSelector((state: IState) => {
    return state;
  });

  const gridSize = state.gridSize < 1 || state.gridSize > DEFAULT_GRID_SIZE ? DEFAULT_GRID_SIZE : state.gridSize;
  const cellSize = state.cellSize < 1 || state.cellSize > DEFAULT_CELL_SIZE ? DEFAULT_CELL_SIZE : state.cellSize;
  const gridArray = Array.from(Array(gridSize), () => Array.from(Array(gridSize), () => false));

  const grid = gridArray.map((x, ix) => (
    <div key={ix} className="Grid-row" style={{height: cellSize + 'px'}}>
      {x.map((y, iy) => (
        <GridCell key={iy} showBorder={state.showGridBorder} size={cellSize} />
      ))}
    </div>
  ));

  return (
    <div className="Grid">
      {grid}
    </div>
  );
}

export default Grid;
