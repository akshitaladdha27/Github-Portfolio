document.addEventListener("DOMContentLoaded", function () {
  const projectLinks = {
    "check-it-out": "https://github.com/akshitaladdha27/Netflix_clone.git",
    view: "https://github.com/akshitaladdha27/Upcoming-Matches-List-using-API.git",
    visit: "https://github.com/akshitaladdha27/Jobringer-Webpage.git",
    open: "https://github.com/akshitaladdha27/Gigfloww-frontend-website.git",
  };

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function () {
      const link = projectLinks[this.id];
      if (link) {
        window.open(link, "_blank");
      }
    });
  });
});

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Optional: Save the user's preference in localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

// Optional: Apply dark mode on page load if previously enabled
document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
});
