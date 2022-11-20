/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
    let digit = 0
    let digit2 = 0
    let p2 = num2.length-1
    let nownum = ""
    let arr = []


    for(;p2>=0;p2--){
        let p1 = num1.length-1
        for(;p1>=0;p1--){
            let num = parseInt(num1[p1])*parseInt(num2[p2]) + digit //本轮乘积+进位 是数字
            digit = parseInt((num1[p1]*num2[p2] + digit)/10)//十位 作为进位 数字
            digit2 = num%10 //个位
            nownum = digit2 + nownum //这一轮的总数
            

            
            //结束本轮
            if(p1 == 0 && digit!=0){
                nownum = digit + nownum
            }


            

            digit = 0 //防止使用上轮的
        }
        // console.log(nownum);
        arr.push(nownum)
        nownum=""
    }

    let max=0 //最长位
    //给每一轮的结果加0
    for(let i = 0;i < arr.length;i++){
        let j = i
        while(j--){
            arr[i] += "0"
        }

        arr[i] = arr[i].split("").reverse().join("") //反转

        max = max>arr[i].length?max:arr[i].length
    }

    
    
    let result = new Array(max).fill(0) //每位的结果
    let dig = new Array(max).fill(0) //每位的进位
    let f = 0
    let duoyu = ""
    for(let point = 0;point<max;point++){
        f = 0
        arr.forEach(p=>{
            if(point<=p.length-1){
                f+=parseInt(p[point])
            }
        })

        f += dig[point]

        f = f + ""

        f = f.split("").reverse().join("")

        
        for(let j = 0;j<f.length;j++){
            if(j==0){
                result[point] = parseInt(f[j]) 
            }
            else{ 
                if(point+j<=max){
                    dig[point+j] = dig[point+j] + parseInt(f[j])
                }
                else{
                    duoyu += f[j]
                }
            }

        }
        
    } 


    console.log( arr,result);
};

multiply("54321","111")