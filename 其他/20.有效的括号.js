/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2!=0){
        return false
    }
    //奇数直接返回
    let m = new Map([
        [')','('],
        [']','['],
        ['}','{']
    ])
    let stack = s.split("")
    let stack2 = []
    stack.forEach(p=>{
        if(stack2.length!= 0 && m.has(p) && m.get(p) == stack2[stack2.length - 1]){
            stack2.pop()
        }
        else{
            stack2.push(p)
        }
    })
    return stack2.length == 0
};

console.log(isValid("([]())"));

//语法
//1.for of遍历字符串
//2.map的用法
//解法
//1.思路:遍历,不符合进栈,符合出栈,注意空栈的情况
//2.优化:length为奇一定false