/* eslint-disable react/prop-types */

import Card from "../Card/Card";
import classes from "./RightSection.module.css";
import img from '../../assets/logo.png'

// eslint-disable-next-line react/prop-types
function RightSection({ content }) {
  const title_array = [
    "Feels Like",
    "Wind",
    "Visibility",
    "Pressure",
    "Heat Index",
    "UV Index",
    "precipitation Index",
    "Wind Chill",
    "Wind Gust",
  ];

  return (
   
    <>
    {content ? 
    <div className={`${classes.container} ${content?.current?.is_day == 0? "midnight_background" :"daylight_background"}`}>
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
    </div> : <div className={`${classes.container} ${classes.welcome_ui}` }>
      <h1 className={classes.welcome_title}>React Wheather App</h1>
      <img src={img} alt="" className={classes.welcome_img} />
      <p className={classes.welcome_text}>This is React Weather App for you to see how the day is going.Interactive Web Application based on API Data fetching and powered by cool animation and User Interface</p>
    </div>
    }
    </>
  );
}

export default RightSection;
