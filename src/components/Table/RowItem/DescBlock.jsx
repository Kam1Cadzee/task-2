import React from 'react';
import PropTypes from 'prop-types';

const DescBlock = ({ domains, country, webPages }) => {
  return (
    <div>
      <p>
        <strong>Domains: </strong> {domains}
      </p>
      <p>
        <strong>Country: </strong> {country}
      </p>
      <p>
        <strong>Site: </strong> <a href={webPages}>{webPages}</a>
      </p>
    </div>
  );
};
DescBlock.propTypes = {
  domains: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  country: PropTypes.string,
  webPages: PropTypes.string,
};
export default DescBlock;
