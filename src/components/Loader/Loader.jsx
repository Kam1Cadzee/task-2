import React from 'react';
import LoaderOval from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.container}>
      <LoaderOval type="Oval" color="black" height={40} width={40} />
    </div>
  );
};
export default Loader;
