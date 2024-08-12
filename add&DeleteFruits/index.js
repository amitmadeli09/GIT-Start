const form=document.querySelector("form");
const fruitList=document.querySelector(".fruits");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const fruitInput=document.getElementById("fruit-to-add").value;
    const list=document.createElement("li");
    list.className="fruit";
    list.innerHTML=`${fruitInput}<button class="delete-btn">x</button>`;

    // creating edit button
    const editBtn=document.createElement("button");
    editBtn.className="edit-btn";
    editBtn.innerText="Edit";

    //adding edit button elements to list
    list.appendChild(editBtn);

    fruitList.appendChild(list);
})
//adding edit button to every elements present in list before
const fruits=document.querySelectorAll("li");
fruits.forEach(fruit => {
    const editBtn=document.createElement("button");
    editBtn.className="edit-btn";
    editBtn.innerText="Edit";
    fruit.appendChild(editBtn);
});
    
fruitList.addEventListener("click",()=>{
    if(event.target.classList.contains("delete-btn")){
        const fruitToDelete=event.target.parentElement;
        fruitList.removeChild(fruitToDelete);
    }
})