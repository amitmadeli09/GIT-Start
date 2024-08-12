const heading = document.querySelector("#main-heading");
heading.style.textAlign = "right";

const subHeading = document.querySelector("#basket-heading");
subHeading.style.color = "brown";

const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "grey";
fruits.style.padding = "30px";
fruits.style.margin = "30px";

const fruitList = document.querySelectorAll(".fruit");
for (let i = 0; i < fruitList.length; i++) {
    if (i % 2 != 0) {
        fruitList[i].style.backgroundColor = "brown";
        fruitList[i].style.color = "white";
    } else { 
        fruitList[i].style.backgroundColor = "white";
        fruitList[i].style.color = "black";
    }
}