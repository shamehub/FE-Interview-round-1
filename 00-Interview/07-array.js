/**
 * 功能区别（slice-切片，splice-剪接）
 * 参数和返回值
 * 是否纯函数
 */

const arr = [10, 20, 30, 40, 50]

// // slice 纯函数
const arr1 = arr.slice()         //复制原数组
const arr2 = arr.slice(1, 4)     //下标1开始到4之前，包括1
const arr3 = arr.slice(2)        //下标2开始，到结束
const arr4 = arr.slice(-3)       //截取最后三个

// splice 非纯函数
const spliceRes = arr.splice(1, 2, 'a', 'b', 'c')     //[10,'a','b','c',30,40,50]
const spliceRes1 = arr.splice(1, 2)
const spliceRes2 = arr.splice(1, 0, 'a', 'b', 'c')
console.log(spliceRes1, arr)
// arrayObject.splice(index,howmany,item1,.....,itemX)
//(剪的位置，剪几个，接的参数)
