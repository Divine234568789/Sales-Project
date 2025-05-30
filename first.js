const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dm");
  darkModeToggle.classList.toggle("dm");

  if (body.classList.contains("dm")) {
    darkModeToggle.textContent = "Light Mode";
  } else {
    darkModeToggle.textContent = "Dark Mode";
  }
});