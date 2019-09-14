console.log("running");

let unitCol = document.querySelector("#units");
let salesCol= document.querySelector("#sales");

unitCol.style.backgroundColor = "red";
unitCol.style.border = "2px solid";
//Change content
unitCol.textContent = salesCol.textContent * 10;



try{
    run();
}
catch(error){
    console.log(error, error.message)
}

console.log("run code");



