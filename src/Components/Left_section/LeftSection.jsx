/* eslint-disable react/prop-types */

import { useContext } from "react";
import Display from "../Display/Display";
import Loader from "../Loader/Loader";
import classes from "./LeftSection.module.css";
import { motion } from "framer-motion";
import { MyContext } from "../../context/Context";

function LeftSection({}) {
  // Handeling data using context API
  const { handleSearch, searchQuery, setSearchQuery, content, isloading } =
    useContext(MyContext);

  return (
    <motion.div
      className={`${classes.container} ${
        content?.current?.is_day == 1 && "daylight_gradient dark_text"
      } ${content?.current?.is_day == 0 && "midnight_gradient light_color"}`}
    >
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
      {isloading ? <Loader /> : content && <Display content={content} />}
      {content && (
        <div
          className={`${classes.bottom_navigation} ${
            content?.current?.is_day == 0 ? " light_text" : "dark_text "
          }`}
        >
          <i className="fa-solid fa-angles-down"></i>
        </div>
      )}
    </motion.div>
  );
}

export default LeftSection;
