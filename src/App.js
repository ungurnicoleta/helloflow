import React, { useEffect, useState } from 'react';

import { NodeMap } from './data'
import { Stack } from './components/Stack'

import styles from './index.css'
import  { NodeComponent } from './components/NodeComponent/NodeComponent'

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
    const [dropDownState, setDropDownState] = useState(false)
    const [branchIndex, setBranchIndex] = useState(0)

    const printBranch = (index) => {
        let listBranch = []
        branches[index].map(elem => {
            listBranch.push(<NodeComponent node={elem}/>)
        }) 
        return listBranch
    }

    const chooseBranch = () => {
        setDropDownState(!dropDownState)
    }

    const printDropDown = () => {
        let options = [];
        
        for(let index = 0; index < branches.length; index++)
            options.push(index)

        {options.map(option => 
            <li onClick={setBranchIndex(option)}>
                {option}
            </li>
        )}
    
        return options
    }
    useEffect(() => {
        //here we call the DFS method to structure the data
        setBranches(DFS());
    }, [])
    
    return <div className={styles.container}>
        <div className={styles.navContainer}>
            <div className={styles.title}> Flow dropout per step and service </div>  
            <div className={styles.branchesDropdown}> 
                <div className={styles.branchesDropdownText}
                    onClick={chooseBranch}>Choose branch</div> 
                    { dropDownState && <div class="dropdown"><ul>{printDropDown()}</ul></div> }
            </div>  
        </div>
        <div className={styles.horizontalList}>
            {
                branches && branches.length !== 0 && printBranch(branchIndex)
            }
        </div>
    </div>
}