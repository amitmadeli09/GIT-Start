const form=document.querySelector("form");
const btn=document.querySelector("button");

//create description element
const description=document.createElement("input");
description.id="description";

form.insertBefore(description,btn);

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const fruitInput=document.getElementById("fruit-to-add").value;
    const descriptionInput=document.getElementById("description").value;

    const fruitUL=document.querySelector(".fruits");

    //create list
    const fruitList=document.createElement("li");
    fruitList.innerHTML=`${fruitInput}<button class="delete-btn">x</button>`;

    const para=document.createElement("p");
    para.innerText=descriptionInput;
    para.style.fontStyle="italic";

    fruitList.appendChild(para);

    fruitUL.appendChild(fruitList);
})

//description for every element present before
const fruits = document.querySelectorAll(".fruit");

for (let i = 0; i < fruits.length; i++) {
    const currentFruit = fruits[i];
    const fruitName = currentFruit.firstChild.textContent.trim(); 

    // Create description paragraph
    const description = document.createElement("p");
    description.className = "description"; 
    description.innerText = fruitName;
    description.style.fontStyle = "italic";
    
    currentFruit.appendChild(description);
}

//filter functionality
const filter = document.getElementById("filter");

filter.addEventListener("keyup", function(event) {
    const textEntered = event.target.value.toLowerCase();
    const fruitItems=document.getElementsByClassName("fruit");

    for(let i=0;i<fruitItems.length;i++){
        const currentFruit = fruitItems[i].firstChild.textContent.toLowerCase();
        if (currentFruit.indexOf(textEntered) === -1) {
            fruitItems[i].style.display = "none";
        } else {
            fruitItems[i].style.display = "flex";
        }
    }
})