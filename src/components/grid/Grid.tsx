import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../models/IState';
import GridCell from '../grid-cell/GridCell';
import './Grid.css';

interface IProps {
  sizeX: number;
  sizeY: number;
}

function Grid(props: IProps) {
  const showGridBorder = useSelector((state: IState) => {
    return state.showGridBorder;
  });
  const gridArray = Array.from(Array(props.sizeX), () => Array.from(Array(props.sizeY), () => false));

  const grid = gridArray.map((x, ix) => (
    <div key={ix} className="Grid-row">
      {x.map((y, iy) => (
        <GridCell key={iy} showBorder={showGridBorder} />
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
