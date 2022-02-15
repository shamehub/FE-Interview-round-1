async function async1() {
    console.log('async1 start')//2
    await async2()
    console.log('async1 end')  //微任务，挂起  6
}

async function async2() {
    console.log('async2')//3
}

console.log('script start')//1

setTimeout(function () {
    console.log('setTimeout')      //宏任务，挂起  8
}, 0)

async1()

new Promise(function (resolve) {
    console.log('promise1')   //4
    resolve()
}).then(function () {         //微任务，挂起  7
    console.log('promise2')
})

console.log('script end')   //5