import React from 'react';
import { render, screen } from '@testing-library/react';
import GridCell from './GridCell';

test('Cell renders with style', () => {
  render(
    <React.StrictMode>
      <GridCell size={20} showBorder={true} />
    </React.StrictMode>
  );

  const cell = screen.getByTestId('grid-cell');

  expect(cell).toHaveStyle({
    display: 'inline-block',
    backgroundColor: '#282c34',
    border: '#4e5259 1px solid',
    width: '20px',
    height: '20px',
  });
});
