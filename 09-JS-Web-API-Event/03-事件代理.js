// 通用的事件绑定函数
function bindEvent(elem, type, fn) {
    elem.addEventListener(type, fn)
}

// 代理绑定
const div3 = document.getElementById('div3')
bindEvent(div3,'click',event => {
    event.preventDefault()
    const target = event.target
    if (target.nodeName === 'A') {
        alert(target.innerHTML)
    }
})