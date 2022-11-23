/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let left = 0
    let right = height.length-1
    let max = (right-left)*Math.min(height[left],height[right])

    while(left < right){
        if(height[left]<=height[right]){
            left++
            max = Math.max(max,(right-left)*Math.min(height[left],height[right]))
        }
        else{
            right--
            max = Math.max(max,(right-left)*Math.min(height[left],height[right]))
        }
    }

    return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

//方法1.双for找出所有情况 必超时
//方法2.记录最大值的l和r,
//然后移动矮的那一边，因为矮的一边限制了容积，移动直到找到比刚才更高的边，如果容积更大更新最大值
//然后继续上面的操作
