// 创建10个a标签，点击的时候弹出对应的序号
// let i,a                               
// for (i = 0; i < 10; i++) {
//     a = document.createElement('a')
//     a.innerHTML = i + '<br>'
//     a.addEventListener('click', function (e) {
//         e.preventDefault()
//         alert(i)
//     })
//     document.body.appendChild(a)
// }
//10个10

let a                               
for (let i = 0; i < 10; i++) {       //块级作用域
    a = document.createElement('a')
    a.innerHTML = i + '<br>' 
    a.addEventListener('click', function (e) {
        e.preventDefault()
        alert(i)
    })
    document.body.appendChild(a)
}
