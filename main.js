let billInput = document.getElementById("billInput");
let tipPerPerson = document.getElementById("tipPerPerson");
let people = document.getElementById("people");
let totalPerPerson = document.getElementById("totalPerPerson");
let customTip = document.getElementById("customTip");


function custom_tip(){
    calculateTip(parseFloat(customTip.value)/100)
}



function calculateTip(p){
    total_tip = parseFloat(billInput.value)*p;
    let number = total_tip/parseInt(people.value)
    tipPerPerson.innerText = "$" + `${number}`
    totalPerPerson.innerHTML = "$" + `${number+(parseFloat(billInput.value)/(parseInt(people.value)))}`
}


function reset(){
    billInput.value = ""
    tipPerPerson.innerText = "$"
    people.value = ""
    totalPerPerson.innerText = "$"
}