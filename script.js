var deleteButtons = document.querySelectorAll(".delete");
var heartButtons = document.querySelectorAll(".fa-heart");
var plusButtons = document.querySelectorAll(".plus");
var minusButton = document.querySelectorAll(".moins");
var priceTotal = document.querySelector(".prix-total");


Array.from(deleteButtons).map((el) => {
  el.addEventListener("click", () => {
    el.parentElement.parentElement.remove();
    priceTotal.innerHTML = parseInt (priceTotal.innerHTML.replace("dt","")) - 
    parseInt (el.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerHTML) * 
    parseInt(el.parentElement.previousElementSibling.previousElementSibling.innerHTML.replace("dt","")) + "dt";
  });
});

Array.from(heartButtons).map((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("red");
  });
});

Array.from(plusButtons).map((el) => {
  el.addEventListener("click", () => {
    el.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerHTML=
     parseInt(el.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerHTML)+1
    var price = el.parentElement.previousElementSibling.previousElementSibling.innerHTML.replace("dt","");
   
    priceTotal.innerHTML = parseInt (priceTotal.innerHTML.replace("dt","")) +parseInt (price) + "dt";
  });
});

Array.from(minusButton).map((el) => {
    el.addEventListener("click", () => {
        if (el.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerHTML > 1){

        el.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerHTML=
       parseInt(el.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerHTML)-1
       var price = el.parentElement.previousElementSibling.previousElementSibling.innerHTML.replace("dt","");
             priceTotal.innerHTML = parseInt (priceTotal.innerHTML.replace("dt","")) - parseInt (price) + "dt";
    }
    });
  });
