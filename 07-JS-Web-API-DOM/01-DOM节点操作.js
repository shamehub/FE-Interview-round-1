const div1 = document.getElementById('div1')           //id
console.log('div1',div1)

const divList = document.getElementsByTagName('div')          //集合
console.log('divList.length',divList.length)
console.log('divList[0]',divList[0])

const containerList = document.getElementsByClassName('container')         //集合
console.log('containerList.length',containerList.length)
console.log('containerList[0]',containerList[0])

const pList1 = document.querySelectorAll('p')                  //css选择器
console.log('plist',pList1)

const pList = document.querySelectorAll('p')                  //css选择器
const p1 = pList[0]

// property形式
p1.style.width = '100px'
p1.className = 'red'
console.log(p1.style.width)
console.log(p1.className)
console.log(p1.nodeName)       //节点名字
console.log(p1.nodeType)       //1

//attribute     
p1.setAttribute('data-name','attri')
p1.setAttribute('style','font-size:50px')