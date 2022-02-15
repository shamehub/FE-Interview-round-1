
// callback hell

// 获取第一份数据
$.get(url,(data1)=>{
    console.log(data1)

    // 获取第二份数据
    $.get(url,(data2)=>{
        console.log(data2)

        // 获取第三份数据
        $get(url,(data3)=>{
            console.log(data3)

            // 获取更多数据
        })
    })
})

// Promise
function getData(url){
    return new Promise((reslove, reject) => {
        $.get({
            url,
            success(data){
                reslove(data)
            },
            error(err){
                reject(err)
            }
        })
    })
}
const url1 = './data1.json'
const url2 = './data2.json'
const url3 = './data3.json'

getData(url1).then(data1 => {
    console.log(data1)
    return getData(url2)
}).then(data2 => {
    console.log(data1)
    return getData(url2)
}).then(data3 => {
    console.log(data3)
}).catch(err => {
    console.log(err)
})