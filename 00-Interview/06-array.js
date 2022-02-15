/**
 * 1. 功能是什么？
 * 2. 返回值是什么？
 * 3. 是否会对原数组造成影响？
 */
    
const arr = [10, 20, 30, 40]

// pop-截取最后一个元素，返回元素
const popRes = arr.pop()
console.log(popRes, arr)

// shift-截取第一个元素，返回元素
const shiftRes = arr.shift()
console.log(shiftRes, arr)

//push-添加新元素至数组后方，返回length
const pushRes = arr.push(50) 
console.log(pushRes, arr)

//unshift-添加新元素至数组前方，返回length
const unshiftRes = arr.unshift(5)   
console.log(unshiftRes, arr)



// 纯函数：1. 不改变源数组（没有副作用）；2. 返回一个数组
const arr = [10, 20, 30, 40]

// concat-添加
const arr1 = arr.concat([50, 60, 70])
// map-每个元素*10
const arr2 = arr.map(num => num * 10)
// filter-过滤
const arr3 = arr.filter(num => num > 25)
// slice-复制
const arr4 = arr.slice()

// 非纯函数
// push pop shift unshift
// forEach
// some every
// reduce