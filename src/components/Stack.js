export class Stack { 
    constructor() { 
        this.items = []; 
    } 
  
    push(element) { 
        this.items.push(element); 
    } 

    pop() { 
        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    } 

    peek() { 
        return this.items[this.items.length - 1]; 
    } 

    isEmpty() { 
        return this.items.length == 0; 
    } 
    
    printStack() { 
        let str = ""; 
        for (var i = 0; i < this.items.length; i++) 
            str += this.items[i].value + " "; 
        return str; 
    } 

    getBranchFromStack() { 
        let branch = [] 
        for (var i = 0; i < this.items.length; i++) 
            branch.push(this.items[i])
        return branch; 
    } 
} 