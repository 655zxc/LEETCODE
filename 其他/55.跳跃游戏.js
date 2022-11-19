/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump1 = function (nums) {
  if (nums.length == 1) {
    return false;
  }
  let jumping = [0]; //本轮可以跳到的地方 存的是索引
  let index = 0; //队列的下标

  //循环 直到队列结束 无可跳点
  while (index != jumping.length) {
    //找这个点可以访问的地方
    for (let i = 0; i < nums[index]; i++) {
      //for循环nums[p]次,代表可以跳这么多步

      if (index + i + 1 == nums.length - 1) {
        return true;
      }

      //p+i+1 索引+可以跳的步数 = 新索引
      if (jumping.indexOf(index + i + 1) == -1) {
        //没跳到过
        jumping.push(index + i + 1); //加入队列
      } else {
        //跳到过这
      }
    }
    index++;
  }
  return false;
};
//方法1(超时)
//采用一个队列,初始点为nums的第一项,遍历队列,将当前点可访问到的点加入队列

//方法2
//直接求一个点能到达的最远距离,那么这个点到最远距离之间的所有点都可以访问,再求这些点能达到的最远距离
//然后再去访问两次最远距离之间的这些点,不断更新最远距离

canJump2 = function (nums) {
    if (nums.length == 1) {
        return false;
      }

  let oldMax = 0; //下标
  let newMax = nums[0]; //下标
  let max = newMax;

  while (true) {
    for (let i = oldMax + 1; i <= newMax && i <= nums.length; i++) {
      if (i + nums[i] > newMax) {
        max = i + nums[i] > max ? i + nums[i] : max;
      }
    }

    console.log(oldMax,newMax,max);

    if (max >= nums.length-1) {
        return true;
      }
      //注意max是下标!!不是length,比较的时候注意


    if (max <= newMax) {
      return false;
    }



    oldMax = newMax;
    newMax = max;
  }
};

console.log(canJump2([2, 0,0]));
