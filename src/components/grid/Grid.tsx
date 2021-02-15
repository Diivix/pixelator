import React from 'react';
import { useSelector } from 'react-redux';
import { DEFAULT_CELL_ACTIVE_COLOR, DEFAULT_CELL_INACTIVE_COLOR, DEFAULT_CELL_SIZE, DEFAULT_CELL_SIZES, DEFAULT_GRID_SIZE, DEFAULT_GRID_SIZES } from '../../helpers/defaults';
import { IState } from '../../models/IState';
import GridCell from '../grid-cell/GridCell';
import './Grid.css';

interface IProps {}

function Grid(props: IProps) {
  const state = useSelector((state: IState) => {
    return state;
  });

  const activeColor =
    state.cellActiveColor.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/i) !== null ? state.cellActiveColor : DEFAULT_CELL_ACTIVE_COLOR;
  const inactiveColor =
    state.cellInactiveColor.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/i) !== null ? state.cellInactiveColor : DEFAULT_CELL_INACTIVE_COLOR;

  const gridSize = isNaN(state.gridSize) || !DEFAULT_GRID_SIZES.includes(state.gridSize) ? DEFAULT_GRID_SIZE : state.gridSize;
  const cellSize = isNaN(state.cellSize) || !DEFAULT_CELL_SIZES.includes(state.cellSize)  ? DEFAULT_CELL_SIZE : state.cellSize;
  const gridArray = Array.from(Array(gridSize), () => Array.from(Array(gridSize), () => false));

  const grid = gridArray.map((x, ix) => (
    <div key={ix} className="Grid-row" style={{ height: cellSize + 'px' }}>
      {x.map((y, iy) => (
        <GridCell key={iy} showBorder={state.showGridBorder} size={cellSize} activeColor={activeColor} inactiveColor={inactiveColor} />
      ))}
    </div>
  ));

  return <div className="Grid">{grid}</div>;
}

export default Grid;
