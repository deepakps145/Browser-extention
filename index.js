let mylead =[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const clearBtn = document.getElementById("clear-btn")
const tabBtn = document.getElementById("tab-btn")

clearBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    mylead = []
    render(mylead)
})
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("mylead") )

if(leadsFromLocalStorage){
    mylead = leadsFromLocalStorage
    render(mylead)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        mylead.push(tabs[0].url)
        localStorage.setItem("mylead", JSON.stringify(mylead) ) 
        render(mylead)
    })
    // mylead.push(inputEl.value)
    // localStorage.setItem("mylead", JSON.stringify(mylead) ) 
    // render(mylead)
})

inputBtn.addEventListener("click", function(){
    mylead.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("mylead", JSON.stringify(mylead) ) 
    render(mylead)
}) 

function render(lead){
    let listitems = ""
    for(let i=0; i < lead.length; i++){
        //ulEl.innerHTML += "<li>" + mylead[i] + "</li>" 
        // listitems += "<li><a href='" + mylead[i] + "' target='_black'>" + mylead[i] + "</a></li>" 
        listitems += `<li>
                        <a href='${lead[i]}' target='_black'>${lead[i]}</a>
                      </li>`
        // const li = document.createElement("li")
        // li.textContent = mylead[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listitems    
}