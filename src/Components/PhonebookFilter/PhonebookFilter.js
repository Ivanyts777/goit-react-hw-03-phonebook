import React from "react";
import PropTypes from "prop-types";
import styles from "./PhonebookFilter.module.css";

const PhonebookFilter = ({ valueFilter, changeFilter }) => {
  return (
    <div className={styles.filter}>
      <label >
        Find contact by name
        <br />
        <input
          type="text"
          value={valueFilter}
          onChange={(e) => changeFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default PhonebookFilter;

PhonebookFilter.propTypes = {
  valueFilter: PropTypes.array.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
