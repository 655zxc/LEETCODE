function Queue(items = []){
    this.items = items

    //入队
    this.enqueue = function(element){
        return this.items.push(element)
    }

    //出队
    this.dequeue = function(){
        return this.items.shift()
    }

    //第一个
    this.front = function(){
        return this.items[0]
    }

    //判空
    this.isEmpty = function(){
        return this.items.length == 0?true:false
    }

    //大小
    this.size = function(){
        return this.items.length
    }

    //返回字符串
    this.toString = function(){
        return this.items.toString()
    }

}

let queue = new Queue([1,2,3,4,5])
console.log(queue.enqueue(6));
console.log(queue.items);
console.log(queue.dequeue());
console.log(queue.items);
console.log(queue.front());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.toString());

