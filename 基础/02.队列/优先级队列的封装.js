//优先级队列是不同于先进先出队列的另一种队列。每次从队列中取出的是具有最高优先权的元素。
//每个元素的优先级根据问题的要求而定。当从优先级队列中删除一个元素时，可能出现多个元素具有相同的优先权。
//在这种情况下，把这些具有相同优先权的元素视为一个先来先服务的队列，按他们的入队顺序进行先后处理。

let a = new PriorityQueue()
a.enqueue("aasx",3)
a.enqueue("xccs",2)
a.enqueue("saxx1",6)
a.enqueue("saxx2",6)
a.enqueue("saxx3",6)
a.enqueue("saxx4",6)


console.log(a.items);



function PriorityQueue(){
    function QueueElement(element,priority){
        this.element = element 
        this.priority = priority
    }

    this.items = []

    this.enqueue = function(element,priority){
        let queueelement = new QueueElement(element,priority)
        if(this.items.length==0)
        {
            this.items.push(queueelement)
            return this.items.length
            //当队列没有长度 直接插入 并且return
        }
        else{
            for(let i=0;i<this.items.length;i++){
                if(queueelement.priority > this.items[i].priority){
                    this.items.splice(i,0,queueelement)
                    //寻找数组中第一个优先级小于插入元素的元素 位置为i 使用splice插入
                    return this.items.length
                    //并且结束 return
                }
            }

            this.items.push(queueelement)
            //没找到 则在最后插入
        }
        return this.items.length
    }

    this.dequeue = function(){
        return this.items.shift()
    }
}