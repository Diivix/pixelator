import React from 'react';
import { useSelector } from 'react-redux';
import { DEFAULT_CELL_SIZE, DEFAULT_CELL_SIZES } from '../../helpers/defaults';
import { IState } from '../../models/IState';
import Cell from '../cell/Cell';
import styled from 'styled-components';

interface IProps {}

interface IStyledProps{
  height: string;
}

const Container = styled.div`
  text-align: center;
  width: max-content;
`;

const Row = styled.div<IStyledProps>`
  height: ${props => props.height};
`;

function Grid(props: IProps) {
  const state = useSelector((state: IState) => {
    return state;
  });

  const cellSize = isNaN(state.cellSize) || !DEFAULT_CELL_SIZES.includes(state.cellSize) ? DEFAULT_CELL_SIZE : state.cellSize;
  const cells = state.grid; // Array.from(Array(gridSize), () => Array.from(Array(gridSize), () => false));

  const grid = cells.map((x, indexX) => (
    <Row key={indexX} height={cellSize + 'px' }>
      {x.map((y, indexY) => (
        <Cell
          key={indexY}
          x={indexX}
          y={indexY}
          cell={y}
          size={state.cellSize}
          showBorder={state.showGridBorder}
          activeColor={state.cellActiveColor}
        />
      ))}
    </Row>
  ));

  return <Container>{grid}</Container>;
}

export default Grid;
