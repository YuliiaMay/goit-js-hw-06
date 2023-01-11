const form = document.querySelector('.login-form');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;
    const message = "Please make sure all fields are filled in correctly!";
    
    if (email.value === "" || password.value === "") {
        alert(message);
    } else {
        const object = {
            email: email.value,
            password: password.value
        };

        console.log(object);

        event.currentTarget.reset();
    }
});