import React from 'react';
import { render } from '@testing-library/react';
import Orders from '../Orders';

test('renders learn react link', () => {
  const { getByText } = render(<Orders />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
