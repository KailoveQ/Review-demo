class Student {
  constructor(name,number) {
    this.name =name
    this.number =number
  }
  sayHi(){
    console.log(
      `姓名${this.name} , 学号 ${this.number}`
    )
  }
}

const xialuo = new Student('name',100)
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi()