// console.log("running");

let unitCol = document.querySelector("#units");
// let salesCol= document.querySelector("#sales");
// let priceCol = document.querySelector("#prices");
// let profitCol = document.querySelector("#profits");
// let totalProfitsCol = document.querySelector("#total-profits");
// unitCol.style.backgroundColor = "red";
// unitCol.style.border = "2px solid";

if(unitCol){//Boolean(unitcol)
    unitCol.addEventListener("input",handler);
};

//hoesting
function handler(e){
    let profit = e.target.previousElementSibling;
    let totalProfit = e.target.nextElementSibling.nextElementSibling;
    let x = parseInt(e.target.textContent);
    let y = parseInt(profit.textContent);
    
    if(Number.isNaN(x) || x<0){
        totalProfit.textContent =0;
    }
    else{
        totalProfit.textContent =  x*y;
    }

}




// try{
//     run();
// }
// catch(error){
//     console.log(error, error.message)
// }

// console.log("run code");


//Hande json data
let data = JSON.parse(jsonText);
console.log(data.entries[0]);


const tableBody= document.querySelector("#excel-table tbody");

//let row = document.createElement("tr");

// tableBody.innerHTML+=tr;

for(z in data.entries){
    let rowNum = parseInt(z)+2;
    let tr =`
                <tr>
                    <td>${rowNum}</td>
                    <td>${data.entries[z].product}</td>
                    <td>${data.entries[z].cost}</td>
                    <td>${data.entries[z].price}</td>
                    <td>${data.entries[z].profit}</td>
                    <td>${data.entries[z].total_profit}</td>
                    <td>${data.entries[z].total_sales}</td>
                    <td>${data.entries[z].units_projected}</td>
                </tr>

`;
    tableBody.innerHTML+=tr;
    // console.log(z);
}
// console.log(data.entries[0].product);

