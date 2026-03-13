const on_btn = document.querySelector(".on")
const off_btn = document.querySelector(".off")

const body = document.body

let light = false

on_btn.addEventListener("click", function(){
    light = true
    body.style.backgroundColor = "#000000"
})

off_btn.addEventListener("click", function(){
    light = false
    body.style.backgroundColor = "#fff"
})