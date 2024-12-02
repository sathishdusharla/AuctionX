document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector("#login-btn");
    if (loginButton) {
        loginButton.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "login.html";
        });
    }
});
