let message =document.getElementById("message")
let message1 =document.getElementById("message1")
let message2 =document.getElementById("message2")
let first=document.getElementById("first1")
let last=document.getElementById("last1")
let middle=document.getElementById("middle1")
let email=document.getElementById("email1")
let userEl=document.getElementById("textbox1")
let pass=document.getElementById("password1")
let pass1=document.getElementById("password")
let displayed=document.getElementById("display")
let pop=document.getElementById("message3")

const user={}


function press(){
    user.first=first.value
    user.last=last.value
    user.middle=middle.value
    user.email=email.value
    user.userEl=userEl.value
    user.pass=pass.value
    user.pass1=pass1.value
    if(first.value == "" && first.value != ""){
        first.style.border = "1px solid red";
        message.innerHTML = "field cannot be blank"
        if(last.value == "" && last.value != ""){
            last.style.border = "1px solid red";
            message1.innerHTML = "field cannot be blank"
        if(middle.value == "" && middle.value != ""){
            middle.style.border = "1px solid red";
            message2.innerHTML = "field cannot be blank"
        }
    }
    }if(pass.value != pass1.value && pass.value === pass1.value){
        pop.innerHTML = "passwords do not match"
    }else{
        displayed.innerHTML = `<p id="display5">login successful</p>`
    }
}
    


