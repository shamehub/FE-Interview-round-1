//手写简易的ajax
//get
const xhr = new XMLHttpRequest()
xhr.open('GET', './data/test.json', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(
                JSON.parse(xhr.responseText)
            )
        }
    }
}
xhr.send(null)

//post
// const postData = {
//     name: 'lishi',
//     passward: 'xxx'
// }
// xhr.send(
//     JSON.Stringift(postData)
// )