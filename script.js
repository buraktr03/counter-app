const increaseBtn = document.querySelector(".increase")
const decreaseBtn = document.querySelector(".decrease")
const number = document.getElementById("number")

let initialNumber = 0

increaseBtn.addEventListener("click",()=>{
    initialNumber++
    number.innerHTML = `${initialNumber}`
})

decreaseBtn.addEventListener("click",()=>{
    if (initialNumber > 0) {
        initialNumber--
        number.innerHTML = `${initialNumber}`
    }
})
