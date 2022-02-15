async function async1(){
    console.log('async1 start')     
    await async2()                        
    //重点，await 的后面，都可以看作是callback的内容，即异步
        console.log('async1 end')       //放入callback 队列等待 event loop
}
async function async2(){
    console.log('async2')         
}
console.log('script start')    
async1()
console.log('script end')      
// 同步代码执行完（event loop）


// async function async1(){
//     console.log('async1 start')       //2
//     await async2()       
//     //下面三行都是异步回调 callback 的内容               
//         console.log('async1 end')              //5
//         await async3()           
//             //下面一行是异步回调的内容           
//             console.log('async1 end 2')           //7
// }
// async function async2(){
//     console.log('async2')           //3
// }
// async function async3(){
//     console.log('async3')            //6
// }
// console.log('script start')        //1
// async1()
// console.log('script end')         //4