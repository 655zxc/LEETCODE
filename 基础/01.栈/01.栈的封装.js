function Stack(items = []){
    this.items = items
    // 数组尾部作为栈顶

    this.push = function(element){
        return this.items.push(element)
    }
    // 数组尾部push


    this.pop = function(){
        return this.items.pop()
    }
    // 数组尾部pop

    this.peek  = function(){
        return this.items[this.items.length-1]
    }
    // 返回栈顶

    this.isEmpty = function(){
        return this.items.length==0?true:false
    }
    //判空

    this.size = function(){
        return this.items.length
    }
    //大小

    this.toString = function(){
        return this.items.toString()
    }
    //返回字符串
}
    
    
    
    
    
    let stack1 = new Stack([1,2,3,4,5])
    stack1.push(6)
    // stack1.pop()
    console.log(stack1.items)
    console.log(stack1.peek())
    console.log(stack1.isEmpty());
    console.log(stack1.size());
    console.log(stack1.toString());
    
