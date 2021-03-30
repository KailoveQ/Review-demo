// 父类
class People{
  constructor(name) {
    this.name = name
  }
  eat(){
    console.log(`${this.name} 吃饭`)
  }
}
// 子类

class Student extends People{
  constructor(name,number) {
    super(name)
    this.number= number
  }
  sayHi(){
    console.log(`姓名${this.name} , 学号 ${this.number}`)
  }
}

//实例
const xialuo = new Student('夏洛',100)
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi()
xialuo.eat()
