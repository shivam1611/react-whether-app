/* eslint-disable react/prop-types */


import classes from "./Display.module.css";

function Display({ content }) {
  return (
    <>
      {content && (
        <div className={`${classes.display} `}>
          <div className={classes.detail_section}>
            <div className={classes.location_section}>
              <p
                className={`${classes.location_text} ${
                  content?.current?.is_day == 0 ? " light_text" : "dark_text"
                }`}
              >
                {content?.location?.name}, {content?.location?.country}
              </p>
            </div>
            <div className={classes.img_section}>
              <img
                src={content?.current?.condition?.icon}
                className={classes.img}
                alt=""
              />
            </div>
            <div
              className={`${classes.text} ${
                content?.current?.is_day == 0 ? " light_text" : "dark_text"
              }`}
            >
              <p className={classes.temperature}>
                {content?.current?.temp_c}
                <span className={classes.symbol}>&deg;c</span>
              </p>
              <p className={classes.situation_text}>
                {content?.current?.condition?.text}
              </p>
            </div>
          </div>

          <div
            className={`${classes.subdetail_section} ${
              content?.current?.is_day == 0 ? " light_text" : "dark_text"
            }`}
          >
            <p className={classes.time_text}>{content?.location?.localtime}</p>
            <p
              className={`${classes.last_updated} ${
                content?.current?.is_day == 0 ? " light_text" : "dark_text"
              }`}
            >
              Last Updated: {content?.current?.last_updated}
            </p>
          </div>
        </div>
      ) 
        
      }
    </>
  );
}

export default Display;
