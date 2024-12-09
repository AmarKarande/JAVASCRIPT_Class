const clock=document.getElementById('clock');
// const clock=document.querySelector('#clock')
// let date=new Date()
// console.log(date.toLocaleDateString())
// Method for change the date secondwise
setInterval(function()  {
    let date=new Date();
    // console.log(date.toLocaleDateString()); Not run to the console
    // want r=to run in Node
    clock.innerHTML=date.toLocaleDateString();
}, 1000);alert
