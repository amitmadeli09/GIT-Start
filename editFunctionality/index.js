function handleFormSubmit(event) {
    event.preventDefault();  // Prevent the form from submitting

    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const myObj = {
        Name: name,
        Email: email,
        Phone: phone
    };

    const myObjSerialised = JSON.stringify(myObj);
    localStorage.setItem(email, myObjSerialised);

    event.target.reset();

    const unorderedList = document.getElementsByTagName("ul")[0];
    const newList = document.createElement("li");
    newList.textContent = `${name} - ${email} - ${phone}`;

    unorderedList.appendChild(newList);

    // Create and append delete button
    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.innerText = "Delete";
    newList.appendChild(delBtn);

    // Create and append edit button
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";  // Correct class name
    editBtn.innerText = "Edit";
    newList.appendChild(editBtn);

    // Delete button functionality
    delBtn.addEventListener("click", () => {
        unorderedList.removeChild(newList);
        localStorage.removeItem(email);
    });

    // Edit button functionality
    editBtn.addEventListener("click", () => {
        // Populate the form with current values
        event.target.username.value = name;
        event.target.email.value = email;
        event.target.phone.value = phone;

        // Remove the current list item and user data from localStorage
        unorderedList.removeChild(newList);
        localStorage.removeItem(email);
    });
}