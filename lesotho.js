let money
let people
let charge
let change
let name
let fee = 75

window.alert("You are about to calculate your taxi fees")
name = window.prompt("Enter your name: ")
document.getElementById("name").innerHTML = "Welcome " + name

document.getElementById("submit").onclick = function(){
    money = document.getElementById("money").value
    people = document.getElementById("people").value
    charge = fee * people
    change = money - charge
    document.getElementById("result").innerHTML = " You must R" + charge + " and your change is R" + change
}