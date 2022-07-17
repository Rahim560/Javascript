// let addbtn = document.getElementById("addbtn")
// let inputbox = document.getElementById("inputbox")
// let showlist = document.querySelector(".list")
// addbtn.addEventListener("click", function(){
//     var paragraph = document.createElement("p");
//     paragraph.innerText = inputbox.value;
//     showlist.appendChild(paragraph);
//     inputbox.value=""
//     paragraph.classList.add("para");
//     paragraph.addEventListener("click",function(){
//         paragraph.style.textDecoration = "line-through"

//     });
//     paragraph.addEventListener("dblclick",function(){
//         showlist.removeChild(paragraph)
//     })

//     })

let a = document.getElementById("addbtn")
let b = document.getElementById("inputbox")
let c = document.getElementById("list")
a.addEventListener("click",function(){
    var d = document.createElement("p")
    d.innerText=b.value;
    c.appendChild(d)
    b.value = ""
    d.classList.add("para")
    d.addEventListener("click",function(){
        d.style.textDecoration = "line-through"
    });
   d.addEventListener("dblclick", function(){
    c.removeChild(d)
   })

})



















