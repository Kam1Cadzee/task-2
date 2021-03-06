import React from 'react';
import Responsive from 'react-responsive';

export const Desktop = props => <Responsive {...props} minWidth={992} />;
export const Tablet = props => <Responsive {...props} maxWidth={991} />;
