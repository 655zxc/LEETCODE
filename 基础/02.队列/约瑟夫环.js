//输入一个数组 以及数字k 每次循环k个元素 淘汰掉这个元素 直到最后只剩一个元素

function Josephus(element,k){
    let queue = new Queue(element)
    //把数组放入队列

    while(queue.size()!=1){
        for(let i = 0;i < k-1 ;i++){
            let m = queue.dequeue()
            queue.enqueue(m)
        }
        //将对头放置队尾 这个元素是不需要去除的 执行这个步骤k-1次
        queue.dequeue()
        //第k次时 去掉队头 也就是需要去除的元素
    }
    //当元素只剩一个时 跳出循环 结束

    return queue.front()
}

console.log(Josephus([1,2,3,4,5],2));











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



