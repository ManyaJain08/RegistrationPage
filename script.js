function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const togglePassword = document.querySelector(".toggle-password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.textContent = "👁️";
    } else {
      passwordInput.type = "password";
      togglePassword.textContent = "👁️";
    }
  }
  