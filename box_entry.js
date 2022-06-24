console.log("hello");

let docNo = document.getElementById("docNo").value;
let date = document.getElementById("date").value;
let l = document.getElementById("l").value;
let b = document.getElementById("b").value;
let h = document.getElementById("h").value;
let ribbedRing = document.getElementById("ribbedRing").value;
let initialBoxNos = document.getElementById("initialBoxNos").value;

function createDocNo(){
    let l = document.getElementById("l").value;
    let b = document.getElementById("b").value;
    let h = document.getElementById("h").value;
    document.getElementById("docNo").value = ""+ l +"*"+ b +"*"+h+"_"+ribbedRing;
    // docNo = ""+l+"*"+b+"*"+h+"_"+ribbedRing;
}

document.getElementById("saveData").addEventListener('click',function(){
    console.log(docNo, date, l, b, h, ribbedRing, initialBoxNos);
});
