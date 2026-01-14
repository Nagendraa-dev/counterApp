
let counter = document.getElementById("Counter")

let count = 0
function Decrease(){
    count -- 
    counter.textContent = count
}
function Increase(){
   let value = count++
    counter.textContent = value
}

function reset(){
    
    counter.textContent = "0" 
    count = 0 

}