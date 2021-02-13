import React from 'react';
import { render, screen } from '@testing-library/react';
import GridCell from './GridCell';
import { DEFAULT_CELL_ACTIVE_COLOR, DEFAULT_CELL_BORDER_COLOR, DEFAULT_CELL_INACTIVE_COLOR } from '../../helpers/defaults';

test('Cell renders with style', () => {
  render(
    <React.StrictMode>
      <GridCell size={20} showBorder={true} activeColor={DEFAULT_CELL_ACTIVE_COLOR} inactiveColor={DEFAULT_CELL_INACTIVE_COLOR} />
    </React.StrictMode>
  );

  const cell = screen.getByTestId('grid-cell');

  expect(cell).toHaveStyle({
    display: 'inline-block',
    backgroundColor: DEFAULT_CELL_INACTIVE_COLOR,
    border: DEFAULT_CELL_BORDER_COLOR + ' 0.5px solid',
    width: '20px',
    height: '20px',
  });
});
