import React from 'react';
import styles from './NodeComponent.css'
import  { Rectangle } from '../Rectangle/Rectangle'
import { Circle } from '../Circle/Circle'

export const NodeComponent = (node) => {
    return <div className={styles.mainBody} >
        <div className={styles.flowContainer}>
            <Rectangle node={node.node}/>
            <Circle percentage={node.node}/>
        </div> 

        <div className={styles.flowContainerPercentage}>
            {node.node.value} %
        </div>
    </div>
}