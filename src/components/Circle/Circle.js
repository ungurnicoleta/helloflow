import React from 'react';
import styles from './Circle.css'

export const Circle = (percentage) => {
    console.log(percentage)
    return <div className={styles.mainBody} >
       <div className={styles.circleContainer}>+</div>
       <div className={styles.circlePercentage}>-{100 - percentage.percentage.value}%</div>
    </div>
}