function handleFormSubmit(event) {
    event.preventDefault();

    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const user_details = {
        username: name,
        email : email,
        phone: phone
    };

    // Serialize the user details object to a string
    const obj_serialized = JSON.stringify(user_details);

    // Use the email as the key to store the serialized object in localStorage
    localStorage.setItem(email, obj_serialized);

    // Reset the form after submission
    event.target.reset();
}
