/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings1 = function(num1, num2) {
    //把字符串变数组并反转
    num1 = num1.split("").reverse()
    num2 = num2.split("").reverse()
    //分辨两个数的长度
    let max = num1.length>=num2.length?num1:num2
    let min = num1.length<num2.length?num1:num2
    let diff = max.length - min.length
    //长度短的补0
    for(let i = 0;i < diff ;i++){
        min.push(0)
    }
    let digit = 0//进位
    let result = []//结果数组
    for(let i =0;i<max.length;i++){
        let res = parseInt(max[i])+parseInt(min[i])+digit //两个数相加再加进位的计算结果
        result[i] = res%10 //取个位数
        digit = parseInt(res/10)//取非个位数的部分
    }
    //最后的进位
    if(digit!=0){
        result[max.length] = digit
    }
    //转会字符串
    result = result.reverse().join("")
    return result
}

addStrings1("0","0")
//解法
//1.两个数变成数组，反转，补0，每个位置相加
//优化
//1.如果短的结束了,长的部分直接落下即可,因此不需要补0,也不需要反转

var addStrings2 = function(num1, num2) {
 
}