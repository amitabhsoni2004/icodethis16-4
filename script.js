let close1 = document.querySelector("div svg");
let undo = document.querySelector(".undo");
let card = document.querySelector(".card");
let btn = document.querySelector(".btn");
let giftcard = document.querySelector(".giftcard");
let goback = document.querySelector(".goback");
close1.addEventListener("click", () => {
    let cancel = confirm("Do you want to delete your Card.");
    if (cancel === true) {
        card.style.display = "none";
        undo.style.display = "block";
    }
    else{
        card.style.display = "flex";
    }
})
undo.addEventListener("click",()=>{
    card.style.display = "flex";
    undo.style.display = "none";
})

btn.addEventListener("click",()=>{
    alert("You have got your gift check your Email...")
    giftcard.style.display = "block";
    card.style.display = "none";
    goback.style.display = "block";
})
goback.addEventListener("click",()=>{
    card.style.display = "flex";
    goback.style.display = "none";
    giftcard.style.display = "none";

})

