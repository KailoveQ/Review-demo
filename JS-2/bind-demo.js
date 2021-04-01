function fn1(a,b) {
  console.log('this',this)
  console.log(a,b)
  return 'this in fn1'
}



Function.prototype.bind1= function () {
  const args= Array.prototype.slice.call(arguments)

  //将传入参数拆解为数组

  //获取this
  const t =args.shift()

  const self = this
  return function () {
    return self.apply(t,self)
  }
}

const fn2= fn1.bind1({x:100},10,20)
fn2()

fn1.call({x:100},10,20)