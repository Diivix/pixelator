import React from 'react';
import GridCell from '../grid-cell/GridCell';
import './Grid.css';

interface IProps {
  sizeX: number;
  sizeY: number;
}

function Grid(props: IProps) {
  const gridArray = Array.from(Array(props.sizeX), (v, i) => Array.from(Array(props.sizeY), () => false));

  const grid = gridArray.map((x, ix) => (
    <div key={ix} className="Grid-row">
      {x.map((y, iy) => (
        <GridCell key={iy} showBorder={true} />
      ))}
    </div>
  ));

  return <div className="Grid">{grid}</div>;
}

export default Grid;
