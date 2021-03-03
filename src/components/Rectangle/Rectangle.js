import React from 'react';
import styles from './Rectangle.css'

export const Rectangle = (node) => {
    console.log(node)
    return <div className={styles.mainBody} 
                style={{ height: `${node.node.value}%`, 
                         backgroundColor: node.node.type === "BASIC" ? "#d7ebff" : "#d4eeea"}}>
        <div className={styles.rectangleText}>{node.node.label}</div>
    </div>
}