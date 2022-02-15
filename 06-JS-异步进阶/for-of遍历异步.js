// 定时算乘法
function multi(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}

const nums = [1, 2, 3]

// nums.forEach(async i =>{                   //同步循环，1，4，9一起出
//     const res  = await multi(i)
//     console.log(res)
// })

!(async function(){                             //异步循环，1，等一秒 4，等一秒 9
    for (let i of nums) {
        const res  = await multi(i)
        console.log(res)
    }
})()