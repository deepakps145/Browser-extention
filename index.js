let mylead =[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    mylead.push(inputEl.value)
    inputEl.value = ""
    renderlists()
}) 

function renderlists(){
    let listitems = ""
    for(let i=0; i < mylead.length; i++){
        //ulEl.innerHTML += "<li>" + mylead[i] + "</li>" 
        listitems += "<li>" + mylead[i] + "</li>"
    }
    ulEl.innerHTML = listitems    // const li = document.createElement("li")
    // li.textContent = mylead[i]
    // ulEl.append(li)
}