import React, { useState } from 'react';
import './GridCell.css';

interface IProps {
  showBorder: boolean
}

function GridCell(props: IProps) {
  const [active, setActive] = useState(false);

  const changeColor = (event: React.MouseEvent) => {
    setActive(!active);
  };

  const style: React.CSSProperties = { 
    backgroundColor: active ? '#f59236' : '#282c34',
    border: props.showBorder ? "#4e5259 1px solid" : ""
  };

  return <div className="GridCell" style={style} onClick={changeColor}></div>;
}

export default GridCell;
