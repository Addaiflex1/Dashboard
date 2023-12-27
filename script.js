const body = document.querySelector("body"),
   sidebar = body.querySelector(".sidebar"),
   toggle = body.querySelector(".toggle"),
   searchBtn = body.querySelector(".search-box"),
   modeSwitch = body.querySelector(".toggle-switch"),
   modeText = body.querySelector(".mode-text");

// Toggle sidebar
toggle.addEventListener("click", () => {
   sidebar.classList.toggle("close");
});

// Show search input box
searchBtn.addEventListener("click", () => {
   sidebar.classList.remove("close");
})

// Check and set initial mode text
if(body.classList.contains("dark")){
   modeText.innerHTML = "Light Mode"
}else{
   modeText.innerHTML = "Dark Mode"
}

// Toggle dark mode
modeSwitch.addEventListener("click", () => {
   body.classList.toggle("dark");
   modeText.textContent = body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});