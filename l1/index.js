let btn = document.getElementById("addBtn")
let btnR = document.getElementById("removeBtn")
let num = 0
btn.addEventListener('click', function () {
    let list = document.getElementById("list")
    let li = document.createElement("li")
    num +=1
    
    let item = document.createTextNode(num)   
    li.appendChild(item)
    list.appendChild(li)
    btn.innerHTML = num
})


btnR.addEventListener('click', function () {
    let list = document.getElementById("list")
    if (list.hasChildNodes()) {
        list.removeChild(list.lastChild);     //to remember
    }
    num -=1
    if(num < 0){
        num = 0
    }
    btn.innerHTML = num
})

