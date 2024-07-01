/* eslint-disable react/prop-types */
import classes from './Card.module.css'
import {motion} from 'framer-motion'

function Card({title,value,unit,subdetail,content}) {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:.5,stiffness:200}}
    className={`${classes.card} ${content?.current?.is_day == 1 ? "daylight_card_background" : "midnight_card_background"}`}>
    <p className={classes.title}>{title}</p>
    <p className={classes.info}>{value}{unit}</p>
    <p className={classes.subdetail}>{subdetail}</p>
    </motion.div>

  )
}

export default Card