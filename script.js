const priceInput = document.getElementById("price")

const peopleInput = document.getElementById("people")

const calculate = document.getElementById("calculate")

let rating
const change=(e)=>{
    rating = e.value
}

calculate.addEventListener("click", ()=>{
     price = priceInput.value
     people = peopleInput.value
     const tip = ((price*rating)/100)/people
     console.log(tip)
     document.getElementById("tip").innerHTML = `
        <h2>Rs. ${tip} /-<h2/>
     `
})

