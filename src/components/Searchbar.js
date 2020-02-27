import React from "react";
import Styles from "./Gallery.module.css";

const Searchbar = ({value, getSearchValue, getNewData}) => {
  return (
    <header className={Styles.Searchbar}>
      <form className={Styles.SearchForm }onSubmit={getNewData}>
        <button type="submit" className={Styles.SearchFormButton}>
          <span className={Styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={Styles.SearchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          value={value}
          onChange={getSearchValue}
        />
      </form>
    </header>
  );
};

export default Searchbar;
