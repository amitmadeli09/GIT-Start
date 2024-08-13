function handleFormSubmit(event){
    event.preventDefault();
    //object creation
    const name=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;

    const myObj={
        Name : name,
        Email : email,
        Phone : phone
    }
    //stored in local storage
    const myObjSerialised=JSON.stringify(myObj);
    localStorage.setItem(email,myObjSerialised);

    event.target.reset();

    //grabbed unordered list for inserting list into it
    const UL=document.getElementsByTagName("ul")[0];
    const list = document.createElement("li");
    list.textContent =`${name} - ${email} - ${phone}`;
    UL.appendChild(list);

    //creating delete button
    const delBtn=document.createElement("button");
    delBtn.id="del-btn";
    delBtn.className="del-btn";
    delBtn.innerText="Delete";
    list.appendChild(delBtn);

    //adding delete functionality
    delBtn.addEventListener("click",()=>{
        UL.removeChild(list);
        localStorage.removeItem(email);
    })
}