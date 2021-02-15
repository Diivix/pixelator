import React from 'react';
import { useSelector } from 'react-redux';
import { DEFAULT_CELL_SIZE, DEFAULT_CELL_SIZES } from '../../helpers/defaults';
import { IState } from '../../models/IState';
import GridCell from '../grid-cell/GridCell';
import './Grid.css';

interface IProps {}

function Grid(props: IProps) {
  const state = useSelector((state: IState) => {
    return state;
  });

  const cellSize = isNaN(state.cellSize) || !DEFAULT_CELL_SIZES.includes(state.cellSize) ? DEFAULT_CELL_SIZE : state.cellSize;
  const cells = state.grid; // Array.from(Array(gridSize), () => Array.from(Array(gridSize), () => false));

  const grid = cells.map((x, indexX) => (
    <div key={indexX} style={{ height: cellSize + 'px' }}>
      {x.map((y, indexY) => (
        <GridCell
          key={indexY}
          x={indexX}
          y={indexY}
          cell={y}
          size={state.cellSize}
          showBorder={state.showGridBorder}
          activeColor={state.cellActiveColor}
        />
      ))}
    </div>
  ));

  return <div className="Grid">{grid}</div>;
}

export default Grid;
