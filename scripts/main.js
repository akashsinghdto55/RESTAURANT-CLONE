document.querySelector("#form").addEventListener("submit",myFunc)
let userData = JSON.parse(localStorage.getItem("user"));
function myFunc(){
    event.preventDefault();
    
    var detailObj={
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        address : document.querySelector("#address").value,
        wallet : document.querySelector("#amount").value,
    };


    localStorage.setItem("user",JSON.stringify(detailObj));

    window.location.reload()
}