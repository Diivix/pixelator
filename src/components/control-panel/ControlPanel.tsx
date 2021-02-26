import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DEFAULT_CELL,
  DEFAULT_CELL_SIZE,
  DEFAULT_CELL_SIZES,
  DEFAULT_COLOR_PICKER_PALLET,
  DEFAULT_GRID_SIZE,
  DEFAULT_GRID_SIZES,
} from '../../helpers/defaults';
import { IState } from '../../models/IState';
import {
  SET_CELL_ACTIVE_COLOR,
  SET_GRID_BACKGROUND_COLOR,
  SET_CELL_SIZE,
  SET_GRID_SIZE,
  SHOW_GRID_BORDER,
  SET_GRID,
} from '../../redux/types';
import { CirclePicker, ColorResult } from 'react-color';
import './ControlPanel.css';
import GridBuilder from '../../helpers/gridBuilder';

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
    if (isNaN(size) || !DEFAULT_GRID_SIZES.includes(state.gridSize)) size = DEFAULT_GRID_SIZE;
    dispatch({ type: SET_GRID_SIZE, payload: size });
  };

  const setCellSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let size = parseInt(event.currentTarget.value);
    if (isNaN(size) || !DEFAULT_CELL_SIZES.includes(size)) size = DEFAULT_CELL_SIZE;
    dispatch({ type: SET_CELL_SIZE, payload: size });
  };

  const setCellActiveColor = (color: ColorResult) => {
    dispatch({ type: SET_CELL_ACTIVE_COLOR, payload: color.hex });
  };

  const setCellInActiveColor = (color: ColorResult) => {
    dispatch({ type: SET_GRID_BACKGROUND_COLOR, payload: { color: color.hex } });
  };

  const resetGrid = () => {
    var grid = GridBuilder.build(state.gridSize, DEFAULT_CELL);
    dispatch({ type: SET_GRID, payload: grid });
  };

  return (
    <div className="ControlPanel">
      <h2>Control Panel</h2>
      <div className="ControlPanel-section">
        <form className="ControlPanel-form">
          <fieldset>
            <p>
              <label htmlFor="grid-border">Grid Border:</label>
              <input id="grid-border" name="grid-border" type="checkbox" checked={state.showGridBorder} onChange={toggleGridBorder} />
            </p>

            <p>
              <label htmlFor="grid-size">Gid Size:</label>
              <select id="grid-size" name="grid-size" value={state.gridSize} onChange={(e) => setGridSize(e)}>
                {DEFAULT_GRID_SIZES.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
            </p>

            <p>
              <label htmlFor="cell-size">Cell Size:</label>
              <select id="cell-size" name="cell-size" value={state.cellSize} onChange={(e) => setCellSize(e)}>
                {DEFAULT_CELL_SIZES.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
            </p>

            <p>
              <button id="reset-grid" name="reset-grid" onClick={resetGrid}>
                Reset Grid
              </button>
            </p>
          </fieldset>
        </form>
      </div>

      <div className="ControlPanel-section">
        <label>Pixel Colour:</label>
        <CirclePicker className="ControlPanel-colorpicker" onChangeComplete={setCellActiveColor} colors={DEFAULT_COLOR_PICKER_PALLET} />
      </div>

      <div className="ControlPanel-section">
        <label>Grid Background Colour:</label>
        <CirclePicker className="ControlPanel-colorpicker" onChangeComplete={setCellInActiveColor} colors={DEFAULT_COLOR_PICKER_PALLET} />
      </div>
    </div>
  );
}

export default ControlPanel;
