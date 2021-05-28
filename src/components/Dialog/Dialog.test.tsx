import React from 'react';
import { render } from '@testing-library/react';

import { Dialog } from '.';

test('Dialog renders', () => {
  const { getByRole } = render(<Dialog />);

  expect(getByRole('button')).not.toBeNull();
  // expect(true).toBeTruthy();
});
