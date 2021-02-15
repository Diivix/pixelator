import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DEFAULT_CELL_BORDER_COLOR } from '../../helpers/defaults';
import { ICell } from '../../models/ICell';
import { SET_CELL } from '../../redux/types';
import './GridCell.css';

interface IProps {
  x: number;
  y: number;
  cell: ICell;
  size: number;
  showBorder: boolean;
  activeColor: string;
}

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

  const style: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: active ? props.cell.activeColor : props.cell.inactiveColor,
    border: props.showBorder ? DEFAULT_CELL_BORDER_COLOR + ' 0.5px solid' : '',
    width: props.size + 'px',
    height: props.size + 'px',
  };

  return <div className="GridCell" data-testid="grid-cell" style={style} onClick={changeColor}></div>;
}

export default GridCell;
