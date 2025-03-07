document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = {
        "try-it-out": "https://github.com/akshitaladdha27/Netflix_clone.git",
        "view-linkedin": "https://www.linkedin.com/in/akshita-laddha-569874250",
        "visit-github": "https://github.com/akshitaladdha27"
    };

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            const link = projectLinks[this.id];
            if (link) {
                window.open(link, "_blank");
            }
        });
    });
});
