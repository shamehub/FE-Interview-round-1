// 类
// 人类
class People {
    constructor(name) {
        this.name = name
    }
    eat(){
        console.log(`${this.name} eat something`)
    }
}
// 学生继承人类
class Student extends People{
    constructor(name,number) {
        super(name)
        this.number = number
    }
    sayHi() {
        console.log(
            `姓名 ${this.name} ，学号 ${this.number}`
        )
    }
}
class Teacher extends People{
    constructor(name,major){
        super(name)
        this.major = major
    }
    teach(){
        console.log(`${this.name} 教授 ${this.major}`)
    }
}

// 通过类 new 对象/实例
const xialuo = new Student('夏洛', 100)
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi()

const wanglaoshi = new Teacher('王老师','语文')
console.log(wanglaoshi.name)
console.log(wanglaoshi.major)
wanglaoshi.teach()