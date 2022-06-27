let on=document.getElementById("on")
let off=document.getElementById("off")
let bulbed=`<img src="./light on.jpg" alt="" width="180px" height="200px" id="bulb">`
let display=document.getElementById("show")
function start(){
display.innerHTML = `${bulbed}`
}

function end(){
display.innerHTML = `<img src="./light off.png" alt="" width="180px" height="200px" id="bulb1"></img>`
}