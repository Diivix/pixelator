import React from 'react';
import { render, screen } from '@testing-library/react';
import GridCell from './GridCell';
import { DEFAULT_CELL_ACTIVE_COLOR, DEFAULT_CELL_BORDER_COLOR, DEFAULT_GRID, DEFAULT_GRID_BACKGROUND_COLOR,  } from '../../helpers/defaults';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../../redux/configureStore';

const { store, persistor } = configureStore();
const grid = DEFAULT_GRID;

test('Cell renders with style', () => {
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <GridCell key={0} x={0} y={0} cell={grid[0][0]} size={20} showBorder={true} activeColor={DEFAULT_CELL_ACTIVE_COLOR} />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  );

  const cell = screen.getByTestId('grid-cell');

  expect(cell).toHaveStyle({
    display: 'inline-block',
    backgroundColor: DEFAULT_GRID_BACKGROUND_COLOR,
    border: DEFAULT_CELL_BORDER_COLOR + ' 0.5px solid',
    width: '20px',
    height: '20px',
  });
});
