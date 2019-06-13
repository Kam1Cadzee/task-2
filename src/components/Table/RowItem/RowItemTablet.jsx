import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Toggable from '../../../util/Toggable';
import Row from '../../Shared/Row/Row';
import Cell from '../../Shared/Cell/Cell';
import Button from '../../Shared/Button/Button';
import css from './RowItem.module.css';
import anim from '../../animation-style/AnimatinRowDesc.module.css';
import DescBlock from './DescBlock';

const RowItemTablet = ({ item, number, selectItem, isSelectRow }) => {
  const { name, ...rest } = item;

  return (
    <Toggable>
      {({ isToggle, toggle }) => {
        const handelClickShow = e => {
          e.stopPropagation();
          toggle();
        };
        return (
          <>
            <Row onClick={selectItem} isSelectRow={isSelectRow}>
              <Cell>{number}</Cell>
              <Cell>{name}</Cell>
              <Cell>
                <Button onClick={handelClickShow} theme style={css.styleForBtn}>
                  Show
                </Button>
              </Cell>
            </Row>
            <CSSTransition
              in={isToggle}
              timeout={300}
              classNames={anim}
              unmountOnExit
            >
              <tr>
                <Cell colSpan="3">
                  <DescBlock {...rest} />
                </Cell>
              </tr>
            </CSSTransition>
          </>
        );
      }}
    </Toggable>
  );
};
RowItemTablet.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    domains: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    country: PropTypes.string,
    alpha_two_code: PropTypes.string,
    web_pages: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  }).isRequired,
  number: PropTypes.number.isRequired,
  selectItem: PropTypes.func.isRequired,
  isSelectRow: PropTypes.bool.isRequired,
};
export default RowItemTablet;
