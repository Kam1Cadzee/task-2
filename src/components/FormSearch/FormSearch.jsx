import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Shared/Button/Button';
import Input from '../Shared/Input/Input';
import css from './FormSearch.module.css';

const FormSearch = ({ search, onChange, onSubmit, onReset }) => {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <Input
        type="text"
        value={search}
        onChange={onChange}
        placeholder="Enter country"
      />
      <Button type="submit">Search</Button>
      <Button onClick={onReset} theme>
        Reset
      </Button>
    </form>
  );
};

FormSearch.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
export default FormSearch;
