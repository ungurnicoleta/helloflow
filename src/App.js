import React, { useEffect, useState } from 'react';

import { NodeMap } from './data'
import { Stack } from './components/Stack'

import styles from './index.css'
import  { NodeComponent } from './components/NodeComponent/NodeComponent'
import  { Dropdown } from './components/Dropdown/Dropdown'

let stack = new Stack();
let sortedBranches = []

const utilsDFS = ( node ) => {
    stack.push( node )
    if (node.adjList.length !== 0){
        node.adjList.map(elem => {
            utilsDFS(NodeMap[elem]);
        })
    } else {
        sortedBranches.push(stack.getBranchFromStack())
        stack.pop();
    }
    return sortedBranches
}

const DFS = () => {
    return utilsDFS(NodeMap.node1)
}


export const App = () => {
    const [branches, setBranches] = useState([])
    const [branchIndex, setBranchIndex] = useState(0)

    const printBranch = (index) => {
        let listBranch = []
        branches[index].map((elem, idx) => {
            listBranch.push(<div key={idx}><NodeComponent node={elem}/></div>)
        }) 
        return listBranch
    }

    useEffect(() => {
        //here we call the DFS method to structure the data
        setBranches(DFS());
    }, [])

    const selectedBranch = (childData) => {
        setBranchIndex(childData)
    }
    
    return <div className={styles.container}>
        <div className={styles.navContainer}>
            <div className={styles.title}> Flow dropout per step and service </div>  
            <Dropdown  
                title="Choose branch"
                branches={branches}
                selectedBranch={selectedBranch}/>
        </div>
        <div className={styles.horizontalList}>
            {
                branches && branches.length !== 0 && printBranch(branchIndex)
            }
        </div>
    </div>
}