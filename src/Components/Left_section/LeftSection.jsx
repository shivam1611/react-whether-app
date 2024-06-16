/* eslint-disable react/prop-types */

import Display from "../Display/Display";
import Loader from "../Loader/Loader";
import classes from "./LeftSection.module.css";

function LeftSection({
  handleSearch,
  searchQuery,
  isloading,
  setSearchQuery,
  content,
}) {
  return (
    <div className={classes.container}>
      <form
        className={classes.search_section}
        onSubmit={(e) => handleSearch(e)}
      >
        <input
          type="text"
          placeholder="London, UK"
          className={classes.search_bar}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i className={`fa-solid fa-magnifying-glass ${classes.icon}`}></i>
        <button type="submit" className={classes.submit_btn}>
          Check
        </button>
      </form>
      {isloading ? <Loader /> : content &&  <Display content={content} />}
      {/* <Loader/> */}
    </div>
  );
}

export default LeftSection;
