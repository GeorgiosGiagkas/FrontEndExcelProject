// console.log("running");

let unitCol = document.querySelector("#units");
// let salesCol= document.querySelector("#sales");
// let priceCol = document.querySelector("#prices");
// let profitCol = document.querySelector("#profits");
// let totalProfitsCol = document.querySelector("#total-profits");
// unitCol.style.backgroundColor = "red";
// unitCol.style.border = "2px solid";

unitCol.addEventListener("input",handler);

//hoesting
function handler(e){
    let profit = e.target.previousElementSibling;
    let totalProfit = e.target.nextElementSibling.nextElementSibling;
    totalProfit.textContent =  parseInt(e.target.textContent) *   parseInt(profit.textContent);
}




// try{
//     run();
// }
// catch(error){
//     console.log(error, error.message)
// }

// console.log("run code");




