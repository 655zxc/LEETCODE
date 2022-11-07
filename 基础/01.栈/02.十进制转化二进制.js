// https://blog.csdn.net/weixin_45560560/article/details/116027610 二进制转化原理




//输入整数 返回二进制
    function change(element){
        let stack = new Stack()
        if(element == 0){
            stack.push(0)
        }
        else{
            while(element !=0){
                
                stack.push(element%2)
                element = Math.floor(element/2)
            }
        }

        let str = ""
        while(!stack.isEmpty()){
            str+=stack.pop();
        }
        return str
    }

   console.log(change(16));







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
    }