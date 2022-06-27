


let root=document.getElementById("root")
let message;

function double(){
    root.innerHTML=`<div class="border">
        <h2>BLACKJACK</h2>
        <p id="sum"></p>
        <p id="numbers">CARDS : </p>
        <P id="add">SUM : </P>
        <button onclick="newcard()">NEW CARD</button> <br>
        <button id="btn" onclick="sum()">START GAME</button>
    </div>`
}

function sum(){
    let firstnumber=10
    let secondnumber=11
    let card=[firstnumber,secondnumber]
    let result=document.getElementById("sum")
    let number=document.getElementById("numbers").textContent+=firstnumber + " "+secondnumber
    let addition=document.getElementById("add")
    document.getElementById("btn").disabled=true
    
    let sum=card[0]+card[1]
    addition.textContent+=sum

    if(sum > 21){
        message="you lost"
        hasblackjack=false
    }else if(sum==21){
        message="you won"
        isalive=true
    }else{
        message="do you want to draw a new card"
        hasblackjack=false
    }
    result.textContent=message
}
function newcard(){

}

let country = ["Nigeria", "Ghana", "Uganda", "Egypt", "Canada", "United Kingdom"]
country.push("United State of America")
country.push("Togo")
country.push("Qatar")
country.push("Germany")
for(let i=0; i<country.length; i++){
    console.log(country[i])    
}
console.log(country.length)
