import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../models/IState';
import { SHOW_GRID_BORDER } from '../../redux/types';
import './ControlPanel.css';

function ControlPanel() {
  const dispatch = useDispatch();
  const showGridBorder = useSelector((state: IState) => {
    return state.showGridBorder;
  });

  const toggleGridBorder = () => {
    dispatch({ type: SHOW_GRID_BORDER, payload: !showGridBorder });
  };

  return (
    <div className="ControlPanel">
      <form>
        <label>
          Show Grid Border:
          <input name="show-grid-border" type="checkbox" checked={showGridBorder} onChange={toggleGridBorder} />
        </label>
      </form>
    </div>
  );
}

export default ControlPanel;
