import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../Shared/Row/Row';
import Cell from '../../Shared/Cell/Cell';

const RowItemDesktop = ({
  item,
  number,
  selectItem: onSelect,
  isSelectRow,
}) => {
  const {
    name,
    domains,
    country,
    alpha_two_code: code,
    web_pages: site,
  } = item;

  return (
    <Row onClick={onSelect} isSelectRow={isSelectRow}>
      <Cell>{number}</Cell>
      <Cell alignText="left">{name}</Cell>
      <Cell>{domains}</Cell>
      <Cell>{country}</Cell>
      <Cell>{code}</Cell>
      <Cell alignText="left">
        <a href={site}>{site}</a>
      </Cell>
    </Row>
  );
};
RowItemDesktop.propTypes = {
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
export default RowItemDesktop;
