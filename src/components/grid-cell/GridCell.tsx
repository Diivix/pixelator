import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DEFAULT_CELL_BORDER_COLOR } from '../../helpers/defaults';
import { ICell } from '../../models/ICell';
import { SET_CELL } from '../../redux/types';
import './GridCell.css';
import styled  from 'styled-components';

interface IProps {
  x: number;
  y: number;
  cell: ICell;
  size: number;
  showBorder: boolean;
  activeColor: string;
}

interface IStyledProps {
  color: string;
  size: string;
  border: string;
}

const Cell = styled.div<IStyledProps>`
    display: inline-block;
    background-color: ${props => props.color};
    border: ${props => props.border};
    width: ${props => props.size};
    height: ${props => props.size};
  `

function GridCell(props: IProps) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(props.cell.isActive);

  const changeColor = (event: React.MouseEvent) => {
    const cell = Object.assign({}, props.cell);
    cell.isActive = !active;
    cell.activeColor = props.activeColor;
    dispatch({ type: SET_CELL, payload: { x: props.x, y: props.y, cell: cell } });
    setActive(!active);
  };

  const colorStyle = active ? props.cell.activeColor : props.cell.inactiveColor;
  const sizeStyle = props.size + 'px';
  const borderStyle = props.showBorder ? DEFAULT_CELL_BORDER_COLOR + ' 0.5px solid' : '';

  return <Cell color={colorStyle} size={sizeStyle} border={borderStyle} data-testid="grid-cell" onClick={changeColor}></Cell>;
}

export default GridCell;
