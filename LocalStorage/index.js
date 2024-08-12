const form=document.querySelector("#form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    const name=document.getElementById("username").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phone").value;

    localStorage.setItem("Username",name);
    localStorage.setItem("Email",email);
    localStorage.setItem("Phone",phone);
})