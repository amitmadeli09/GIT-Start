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
    const UL=document.querySelector("#list");
    const list = document.createElement("li");

    list.textContent =`${name} - ${email} - ${phone}`;
    UL.appendChild(list);

}