import React, { useState } from 'react';
import { DEFAULT_CELL_ACTIVE_COLOR, DEFAULT_CELL_BORDER_COLOR, DEFAULT_CELL_INACTIVE_COLOR } from '../../helpers/defaults';
import './GridCell.css';

interface IProps {
  showBorder: boolean;
  size: number;
}

function GridCell(props: IProps) {
  const [active, setActive] = useState(false);

  const changeColor = (event: React.MouseEvent) => {
    setActive(!active);
  };

  const style: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: active ? DEFAULT_CELL_ACTIVE_COLOR : DEFAULT_CELL_INACTIVE_COLOR,
    border: props.showBorder ? DEFAULT_CELL_BORDER_COLOR + ' 1px solid' : '',
    width: props.size + 'px',
    height: props.size + 'px',
  };

  return <div className="GridCell" style={style} onClick={changeColor}></div>;
}

export default GridCell;
