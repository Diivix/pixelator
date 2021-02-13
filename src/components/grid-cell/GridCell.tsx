import React, { useState } from 'react';
import { DEFAULT_CELL_BORDER_COLOR } from '../../helpers/defaults';
import './GridCell.css';

interface IProps {
  showBorder: boolean;
  size: number;
  activeColor: string;
  inactiveColor: string;
}

function GridCell(props: IProps) {
  const [active, setActive] = useState(false);

  const changeColor = (event: React.MouseEvent) => {
    setActive(!active);
  };

  const style: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: active ? props.activeColor : props.inactiveColor,
    border: props.showBorder ? DEFAULT_CELL_BORDER_COLOR + ' 0.5px solid' : '',
    width: props.size + 'px',
    height: props.size + 'px',
  };

  return <div className="GridCell" data-testid="grid-cell" style={style} onClick={changeColor}></div>;
}

export default GridCell;
