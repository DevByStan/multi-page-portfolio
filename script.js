const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");
const messageInput = document.getElementById("message");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";


    // Validate Name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "What is your name?";
        valid = false;

        setTimeout(() => {
            nameError.textContent = "";
        }, 3000);
    } 
    
    //Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email address";
        valid = false;

        setTimeout(() => {
            emailError.textContent = "";
        }, 3000);
    }

    //Validate Phone (checks that it is not empty, and contains at least 7 didits)
     const phonePattern = /^\+?[\d\s\-()]{7,15}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
        phoneError.textContent = "Enter a valid Phone number";
        valid = false;

        setTimeout(() => {
            phoneError.textContent = "";
        }, 3000);
    }

    // Validate Message
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Please enter your message";
        valid = false;
        setTimeout(() => {
            messageError.textContent = "";
        }, 3000);
    }

    // Submit form or show success action if all fields are valid
    if (valid) {
        alert("Message sent successfully!");
        form.reset();
    }
    
}); 




