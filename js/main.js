// ! JSNACK 1
const js1_button = document.getElementById("js1_button")
const js1_result = document.getElementById("js1_result")

js1_button.addEventListener("click",function() {
    let userInput = parseInt(document.getElementById("js1_number").value)

    if (!isNaN(userInput)) {
        if (userInput % 2 == 0) {
            js1_result.innerHTML = userInput
        } else {
            js1_result.innerHTML = userInput + 1
        }
    }

})

// ! JSNACK 2
const names = ["Danilo","Fausto","Urbano","Alfonsina","Dora","Federica"]
const surnames = ["Padovesi","Angelo","Delucci","Aidanza","Beneventi","Grecia"]

const totalGuests = 10
const totNames = names.length
const totSurnames = surnames.length

let fakeList = document.getElementById("fakeList")
const js2_button = document.getElementById("js2_button")


// funzione random
function RNG(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

js2_button.addEventListener("click",function(){

    fakeList.innerHTML = ""

    for (i = 0; i < totalGuests; i++) {
        let guest = `${names[RNG(0,totNames)]} ${surnames[RNG(0,totSurnames)]}`
        fakeList.innerHTML += `<li>${guest}</li>`
    }
})


// ! JSNACK 3
let js3_array = document.getElementById("js3_array")
let oddSumDisplay = document.getElementById("oddSum")

const js3_min = 0, js3_max = 100;
const arrayLen = 50
let numberArray = []
let oddSum = 0;

for (i = 0; i < arrayLen; i++) {
    //genera array di numeri random
    let randomNum = RNG(js3_min,js3_max)
    numberArray.push(randomNum)

    //mostra array, evidenziando in rosso quelli dispari
    let string = (i % 2 == 0) ? `<span>${randomNum}</span>, ` : `<span class="text-danger">${randomNum}</span>, `
    string = (i == arrayLen - 1) ? string.slice(0,-2) : string
    js3_array.innerHTML += string

    //esercizio
    oddSum = (i % 2 == 0) ? oddSum + 0 : oddSum + numberArray[i]

}

oddSumDisplay.innerHTML += oddSum





