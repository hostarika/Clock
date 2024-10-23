

// let kun = new Date();
// let soat = d.getHours()

// let minut = d.getMinutes()

// let sekund = d.getSeconds()

// console.log();

// function salom() {
//     let a = console.log("Salom")
// }

// setTimeout(salom, 5000)
// setInterval(salom, 1000)


const hour=document.getElementById("hour")
const min=document.getElementById("min")
const sec=document.getElementById("sec")



console.log(hour);
console.log(min);
console.log(sec);

let presentTime=new Date();
let soat=presentTime.getHours();
let minut=presentTime.getMinutes();
let sekund=presentTime.getSeconds();


const colon1 = document.getElementById("colon1");
const colon2 = document.getElementById("colon2");


hour.textContent=soat;
min.textContent=minut ;
sec.textContent=sekund;





function clock() {
 
    if (+sec.textContent==60) {
        min.textContent=+min.textContent+1;
        sec.textContent=0;
    }
    if (+min.textContent==60) {
        hour.textContent=+hour.textContent+1
        min.textContent=0;
    }
    
    sec.textContent++;
}


setInterval(clock,990)






function Ikkinuqta() {
    colon1.style.visibility = colon1.style.visibility === "hidden" ? "visible" : "hidden";
    colon2.style.visibility = colon2.style.visibility === "hidden" ? "visible" : "hidden";
}
setInterval(Ikkinuqta, 1000);