/* eslint-disable react/prop-types */
import classes from './Card.module.css'

function Card({title,value,unit,subdetail,content}) {
  return (
    <div className={`${classes.card} ${content?.current?.is_day == 1 ? "daylight_card_background" : "midnight_card_background"}`}>
    <p className={classes.title}>{title}</p>
    <p className={classes.info}>{value}{unit}</p>
    <p className={classes.subdetail}>{subdetail}</p>
    </div>

  )
}

export default Card