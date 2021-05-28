import React from 'react';
import { render } from '@testing-library/react';

import { Checkbox } from '.';

test('Checkbox renders', () => {
  const { getByRole } = render(<Checkbox />);

  expect(getByRole('checkbox')).not.toBeNull();
  // expect(true).toBeTruthy();
});
