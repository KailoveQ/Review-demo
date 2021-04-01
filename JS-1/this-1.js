//创建10个a 标签，点击对应出现相应的数据
let i,a
for (i=0; i<10;i++){
 a=document.createElement('a')
  a.innerHTML =i+ '<br>'
  a.addEventListener('click',function (e){
    e.preventDefault()
    alert(i)
  })
  document.body.appendChild(a)
}