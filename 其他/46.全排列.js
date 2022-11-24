/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  let res = [];
  //allnums即题目给出的数组,nownums是当前函数的组合
  var fun = function (allnums, nownums) {
    if (nownums.length == allnums.length) {
      //长度相等 说明当前函数完成一个拼接
      res.push([...nownums]);
      return;
    } else {
      //寻找当前函数的nownums中还没用到的排列,加入
      allnums.forEach((p) => {
        if (nownums.indexOf(p) == -1) {
          let newnums = [...nownums];
          newnums.push(p);
          //再次调用函数,进入下一层
          fun([...allnums], [...newnums]);
        }
      });
    }
  };

  fun(nums, []);
  return res;
};

console.log(permute([1, 2, 3]));

//解法1 递归
//1.从第一个函数,一层一层往下调用
//2.第一层只有一次调用,结果为[]
//3.第二层有1*n个调用,结果为[1] [2] ... [n]
//4.第三层,寻找allnums中还没使用的数,因此有1*n*(n-1)个调用，结果为[1,2],[1,3]...[1,n],[2,1]...[n,n-1]
//5.直到两数组长度相等,结束
//注意 
//1.递归传递数组时,一定要copy


//解法2 回溯