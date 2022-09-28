
let userData = JSON.parse(localStorage.getItem("user"));
let purArr = JSON.parse(localStorage.getItem("purchase")) || [];
//let purArr=[];
let myBalance = document.querySelector("#wallet_balance");

myBalance.innerText = userData.wallet

async function getData(){

    try{
let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"
let res = await fetch(url);
let data = await res.json();
displayData(data[0].vouchers)
    }
    catch(err){
console.log(err)
    }
}

    let voucher_list = document.querySelector("#voucher_list");

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
let btn = document.createElement("button");
btn.innerText="buy"
btn.setAttribute("class","buy_voucher");
btn.addEventListener("click",function(){
    myFunc(el);
});

box.append(img,name,price,btn);
voucher_list.append(box)
    });

};

function myFunc(data){

    let price = data.price;
    
    if(price>userData.wallet){
        alert("Sorry! insufficient balance")
    }
    else{
        userData.wallet = userData.wallet-price;
        localStorage.setItem("user",JSON.stringify(userData));
       // console.log(userData.wallet);
        myBalance.innerText = userData.wallet
        purArr.push(data)
        localStorage.setItem("purchase",JSON.stringify(purArr));
        alert("Hurray! purchase successful")

    }

}


getData()
