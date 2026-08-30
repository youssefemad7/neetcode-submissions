class MinStack {
    minarr;
    topIndex;
    arr;
    constructor() {
        this.topIndex = -1;
        this.arr = [];
        this.minarr = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
            this.topIndex++
            this.arr[this.topIndex] = val
        if(this.topIndex==0){
            this.minarr[this.topIndex] = val
           
        }
        
        else if(this.minarr[this.topIndex-1]>val){
            this.minarr[this.topIndex]=val
        }
        else{
           this.minarr[this.topIndex]=this.minarr[this.topIndex-1] 
        }
        
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.topIndex==-1){
            console.log("Stack is Empty can't pop form stack")
        }else{
           
            this.topIndex--
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.topIndex]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minarr[this.topIndex]
    }
}
