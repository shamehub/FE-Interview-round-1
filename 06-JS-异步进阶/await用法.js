// resolve
async function fn1(){
    return 100
}
const res1 = fn1()          //执行的asnyc函数，返回的是一个Promise对象[Log] 
console.log('res1',res1)     //Promise {status: "resolved", result: 100}

!(async function(){
    const b = await fn1()
    console.log('b',b)  
})

!(async function(){
    const p1 = Promise.resolve(300)
    const data1 = await p1                   //相当于是 Promise then
    console.log('data1',data1)
})()

!(async function(){
    const data2 = await 400                   //相当于是 Promise.resolve(400)
    console.log('data2',data2)
})()

!(async function(){
    const data3 = await fn1()                
    console.log('data3',data3)
})()

// reject
!(async function(){
    const p4 = Promise.reject('err1')      //reject状态
    try {
        const res = await p4
        console.log(res)
    } catch (ex) {
        console.error(ex)         //try...catch 相当于promise的catch
    }        
})()

!(async function(){
    const p5 = Promise.reject('err1')      //reject状态
    const res = await p5                    //await -> then
    console.log(res)
})