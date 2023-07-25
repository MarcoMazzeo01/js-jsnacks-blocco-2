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