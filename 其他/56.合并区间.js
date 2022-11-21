/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    let max = intervals[intervals.length-1][1]
    let arr = new Array(max).fill(0)
    intervals.forEach(p=>{
        for(let i=p[0];i<=p[1];i++){
            arr[i]++
        }
    })
    let result = []
    let start = 0
    let end = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            start = i
            
            while(i<arr.length && arr[i+1]!=0){
                i++
            }

            if(i<arr.length){
                end = i
            }
            else{
                end = arr.length - 1
            }

            result.push([start,end])

            
        }
    }

    return result

};

//方法1
//让连续的区间合并,但题目中重叠的区间才能合并
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));

//方法2