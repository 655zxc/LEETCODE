let linklist = new LinkedList()
linklist.add(1)
linklist.add(2)
linklist.add(3)

linklist.forlink()



function LinkedList(){
    function Node(element){
        this.element = element
        this.next = null
    }
    //内部类 当作node节点

    this.items = new Node("head",null)
    //初始化 头节点

    this.add = function(element){
        let p = this.items
        while(p.next!=null){
            p = p.next
        }
        p.next = new Node(element)
    }
    //添加

    this.forlink = function(){
        let p = this.items.next
        while(p!=null){
            console.log(p.element);
            p = p.next
        }
    }
    //遍历
}