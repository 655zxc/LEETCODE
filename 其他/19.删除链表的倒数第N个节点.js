/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let ret = new ListNode(0, head)
    let slow = ret
    let fast = ret
    n++
    while(n--){
        fast = fast.next
    }

    while(fast!=null){
        slow=slow.next
        fast=fast.next 
    }

    slow.next = slow.next.next
    return ret.next
};


//解法
//1.找倒数第n个节点,可以使用快慢指针
//2.没有头节点,需要手动调用题目的方法创建头节点
//3.返回时,返回虚拟头节点的next即可,这样删除第一个节点也不会出错
//技巧
//1.可以让fast移动n+1步,这样slow会指向删除节点的前一个
//2.循环n次可以写成while(n--){}