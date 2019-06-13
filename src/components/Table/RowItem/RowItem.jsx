import React from 'react';
import { Desktop, Tablet } from '../../media/media';
import RowItemDesktop from './RowItemDesktop';
import RowItemTablet from './RowItemTablet';

const RowItem = props => {
  return (
    <>
      <Desktop>
        <RowItemDesktop {...props} />
      </Desktop>
      <Tablet>
        <RowItemTablet {...props} />
      </Tablet>
    </>
  );
};

export default RowItem;
