let count = 0;

let btns = document.querySelectorAll(".btn");
let countvalue = document.querySelector("countvalue");

btns.forEach(function(item){
    item.addEventListener("click", function(e){
        const styles = item.classList;
        if(styles.contains("decrease")){
            count--;
        }else if (styles.contains("increase")){
            count++;
        }else{
            count = 0
        }
        countvalue.innerHTML = count
    })
})