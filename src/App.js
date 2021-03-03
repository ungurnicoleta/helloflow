import React from 'react';

import { NodeMap } from './data'
import { Stack } from './components/Stack'

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
    // utilsDFS()
    return <div>
        sal
    </div>
}