let purchaseData = JSON.parse(localStorage.getItem("purchase"))
let userData = JSON.parse(localStorage.getItem("user"));
let myBalance1 = document.querySelector("#wallet_balance");
myBalance1.innerText = userData.wallet

let voucher = document.querySelector("#purchased_vouchers");

displayData(purchaseData)
function displayData(data){

    data.forEach(function(el){
        let box = document.createElement("div");
     box.setAttribute("class","voucher");
let img = document.createElement("img");
img.src=el.image;
let name = document.createElement("p");
name.innerText= el.name;
let price = document.createElement("h3");
price.innerText = el.price;


box.append(img,name,price);
voucher.append(box)
    });

};