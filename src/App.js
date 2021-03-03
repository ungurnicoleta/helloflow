import React from 'react';

import { NodeMap } from './data'
import { Stack } from './components/Stack'

import styles from './index.css'
import  { NodeComponent } from './components/NodeComponent/NodeComponent'

let stack = new Stack();
let branches = []

const utilsDFS = ( node ) => {
    stack.push( node )
    if (node.adjList.length !== 0){
        node.adjList.map(elem => {
            utilsDFS(NodeMap[elem]);
        })
    } else {
        branches.push(stack.getBranchFromStack());
        stack.pop();
    }
    return branches
}

const DFS = () => {
    return utilsDFS(NodeMap.node1)
}

export const App = () => {
    console.log(DFS())
    return <div className={styles.container}>
        <div className={styles.navContainer}>
            <div className={styles.title}> Flow dropout per step and service </div>  
            <div className={styles.branchesDropdown}> 
                <div className={styles.branchesDropdownText}>Choose branch</div> 
            </div>  
        </div>
        <div className={styles.horizontalList}>
            <NodeComponent node={NodeMap.node1}/>
            <NodeComponent node={NodeMap.node2}/>
            <NodeComponent node={NodeMap.node3}/>
            <NodeComponent node={NodeMap.nodeBranch2}/>
            <NodeComponent node={NodeMap.nodeBranch3}/>
            {/* <NodeComponent node={NodeMap.node2}/>
            <NodeComponent node={NodeMap.node3}/> */}
        </div>
    </div>
}