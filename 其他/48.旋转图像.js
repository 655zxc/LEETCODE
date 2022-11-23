/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    for(let i = 0;i<matrix.length-1;i++){
        for(let j=i+1;j<matrix[i].length;j++){
            let num = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = num
        }
    }
    for(let i =0;i<matrix.length;i++){
        for(let j=0;j<parseInt(matrix[0].length/2);j++){
            let num = matrix[i][j]
            matrix[i][j] = matrix[i][matrix[0].length-1-j]
            matrix[i][matrix[0].length-1-j] = num
        }
    }
};

rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])

//方法1
//1.顺时针旋转90度 = 沿对角线反转,再沿着中轴线反转,两个for即可
//注意
//1.i是横,j是纵,别写着写着弄混


//方法2
//旋转后,第i行变成从右数的第i列,因此新建一个二维数组