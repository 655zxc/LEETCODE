/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//方法1
//让连续的区间合并,但题目中重叠的区间才能合并
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

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));



//方法2
//1.首先由于参数无序,对二维数组(或对象)排序,直接用自带的sort,https://juejin.cn/post/6981242757750718500
//2.设置两个数组,一个装待加入区间,一个是已经处理完毕的区间,如果已处理区间右端>=待加入区间左端,则有重叠,将二者合并,合并的方法是更新最右端,取二者最大值

var merge2 = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = []
    intervals.forEach(p=>{
        if(res.length==0){
            res.push(p)//第一个区间 直接push
        }
        else{
            let end = res[res.length-1][1] //res中 已经合并的区间的最右端
            let start = p[0] //intervals 待加入的区间的最左端

            if(start<=end){
                //重合 合并两个区间 无需push
                res[res.length-1][1] = res[res.length-1][1]>p[1]?res[res.length-1][1]:p[1]
                //更新最右端 
            }
            else{
                //不重合 push新区间
                res.push(p)
            }
        }
    })
    return res
}

console.log(merge2([[1,3],[4,6]]));