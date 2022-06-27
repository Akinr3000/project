let rootEl=document.getElementById("root")
// let texts=document.getElementById("p")
let messages=document.getElementById("msg")
let replyEl=document.createElement("reply")
let conteneEl=document.getElementById("content")
let chats =document.getElementById("chat")

let count = []
let add = 0
let readEl = document.getElementById("read")

function send(){
    if (chats.value != ""){
        messages.innerHTML += `<p>${chats.value}</p>`
        chats.value = ""
        add = add + 1
        count.push(add)

        for(let i = 0; i < count.length; i++){
            if(i >= 1){
                readEl.innerHTML = `<span >${count[i]} unread messages</span>` 
            }
            else{
                readEl.innerHTML = `<span >${count[i]} unread message</span>` 
            }
           
        }
    }
}
