//深拷贝

const obj1 ={
  age:10,
  name:'xxx',
  address:{
    city:'Beijing'
  },
  arr:['a','b','c']
}

const obj2 = deepClone(obj1)
obj2.address.city = 'qindao'
console.log(obj1.address.city)

/**
 *
 * @param obj
 * @returns {{}}
 */

function deepClone (obj={}){
  if(typeof obj !=='object' || obj == null){
    return  obj
  }

  let result
  if( obj instanceof Array){
    result=[]
  } else {
    result ={}
  }

  for(let key in obj){
    if (obj.hasOwnProperty(key)){
        result[key] =deepClone(obj[key])
    }
  }
  return  result
}