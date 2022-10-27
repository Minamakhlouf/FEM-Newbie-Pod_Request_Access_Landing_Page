let email = document.querySelector("#email"); 
let form = document.querySelector("form"); 
let error = document.querySelector(".error-message")
let errorMessage = "Oops! Please check your email"; 

form.addEventListener("submit", (e)=> {
    let message = ""; 
    let isEmail = email.value.includes("@"); 
    if (email.value === "" || email.value === null || !isEmail) {
        e.preventDefault(); 
        message = errorMessage; 
        error.innerHTML = message; 
    }
}); 