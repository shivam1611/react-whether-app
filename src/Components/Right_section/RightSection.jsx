/* eslint-disable react/prop-types */

import Card from "../Card/Card";
import classes from "./RightSection.module.css";
import img from "../../assets/logo.png";
import { useContext } from "react";
import { motion } from "framer-motion";
import { MyContext } from "../../context/Context";

// eslint-disable-next-line react/prop-types
function RightSection() {
  // Handeling Data and state using context API
  const { content } = useContext(MyContext);

  return (
    <>
      {content ? (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:.5,stiffness:150}}
          className={`${classes.container} ${
            content?.current?.is_day == 0
              ? "midnight_background"
              : "daylight_background"
          }`}
        >
          <Card
            title={"Feels Like"}
            value={content?.current?.feelslike_c}
            unit={"\u00B0c"}
            subdetail={""}
            content={content}
          />
          <Card
            title={"Wind"}
            value={content?.current?.wind_kph}
            unit={" km/h"}
            subdetail={content?.current?.wind_dir}
            content={content}
          />
          <Card
            title={"Visibility"}
            value={content?.current?.vis_km}
            unit={" km/h"}
            subdetail={""}
            content={content}
          />
          <Card
            title={"Pressure"}
            value={content?.current?.vis_km}
            unit={" km/h"}
            subdetail={""}
            content={content}
          />
          <Card
            title={"Heat Index"}
            value={content?.current?.heatindex_c}
            unit={" \u00B0c"}
            subdetail={""}
            content={content}
          />
          <Card
            title={"UV Index"}
            value={content?.current?.uv}
            unit={""}
            subdetail={""}
            content={content}
          />
          <Card
            title={"Precipitation"}
            value={content?.current?.precip_mm}
            unit={" mm"}
            content={content}
            subdetail={""}
          />
          <Card
            title={"Wind Chill"}
            value={content?.current?.windchill_c}
            unit={" \u00B0c"}
            content={content}
            subdetail={""}
          />
          <Card
            title={"Wind Gust"}
            value={content?.current?.gust_kph}
            unit={" km/h"}
            content={content}
            subdetail={""}
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, stiffness: 200 }}
          className={`${classes.container} ${classes.welcome_ui}`}
        >
          <h1 className={classes.welcome_title}>React Wheather App</h1>
          <img src={img} alt="" className={classes.welcome_img} />
          <p className={classes.welcome_text}>
            This is React Weather App for you to see how the day is
            going.Interactive Web Application based on API Data fetching and
            powered by cool animation and User Interface
          </p>
        </motion.div>
      )}
    </>
  );
}

export default RightSection;
