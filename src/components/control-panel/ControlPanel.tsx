import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DEFAULT_CELL_SIZE, DEFAULT_GRID_SIZE } from '../../helpers/defaults';
import { IState } from '../../models/IState';
import { SET_CELL_SIZE, SET_GRID_SIZE, SHOW_GRID_BORDER } from '../../redux/types';
import './ControlPanel.css';

function ControlPanel() {
  const dispatch = useDispatch();
  const state = useSelector((state: IState) => {
    return state;
  });

  const toggleGridBorder = () => {
    dispatch({ type: SHOW_GRID_BORDER, payload: !state.showGridBorder });
  };

  const setGridSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let size = parseInt(event.currentTarget.value);
    if (isNaN(size) || size === 0 || size > DEFAULT_GRID_SIZE) size = DEFAULT_GRID_SIZE;
    dispatch({ type: SET_GRID_SIZE, payload: size });
  };

  const setCellSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let size = parseInt(event.currentTarget.value);
    if (isNaN(size) || size === 0 || size > DEFAULT_CELL_SIZE) size = DEFAULT_CELL_SIZE;
    dispatch({ type: SET_CELL_SIZE, payload: size });
  };

  return (
    <div className="ControlPanel">
      <h2>Control Panel</h2>
      <form className="ControlPanel-form">
        <fieldset>
          <p>
            <label htmlFor="grid-border">Grid Border:</label>
            <input id="grid-border" name="grid-border" type="checkbox" checked={state.showGridBorder} onChange={toggleGridBorder} />
          </p>

          <p>
            <label htmlFor="grid-size">Gid Size:</label>
            <select id="grid-size" name="grid-size" value={DEFAULT_GRID_SIZE} onChange={(e) => setGridSize(e)}>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </p>

          <p>
            <label htmlFor="cell-size">Cell Size:</label>
            <select id="cell-size" name="cell-size" value={DEFAULT_CELL_SIZE} onChange={(e) => setCellSize(e)}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
            </select>
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default ControlPanel;
