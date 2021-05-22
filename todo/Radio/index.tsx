import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { styled } from '../../stitches.config';

const StyledRadio = styled(RadioGroup.Item, {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
  borderRadius: '50%',
  boxShadow: 'inset 0 0 0 1px gainsboro',
  width: 15,
  height: 15,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',

  '& ~ &': { marginLeft: 5 },

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px dodgerblue, 0 0 0 1px dodgerblue',
  },
});

const StyledIndicator = styled(RadioGroup.Indicator, {
  width: 7,
  height: 7,
  borderRadius: '50%',
  backgroundColor: 'dodgerblue',
});

export const Radio = () => (
  <StyledRadio value="cat">
    <StyledIndicator />
  </StyledRadio>
);
