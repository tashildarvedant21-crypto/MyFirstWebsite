/* ===============================
   DARK / LIGHT MODE TOGGLE
================================ */
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent =
        document.body.classList.contains("dark-mode")
            ? "Light Mode "
            : "Dark Mode ";
});

/* ===============================
   SHOW / HIDE ABOUT SECTION
================================ */
const aboutSection = document.getElementById("about");
const toggleAboutBtn = document.getElementById("toggleAbout");

toggleAboutBtn.addEventListener("click", () => {
    if (aboutSection.style.display === "none") {
        aboutSection.style.display = "block";
        toggleAboutBtn.textContent = "Hide About";
    } else {
        aboutSection.style.display = "none";
        toggleAboutBtn.textContent = "Show About";
    }
});

/* ===============================
   IMAGE SLIDER
================================ */
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    sliderImage.src = images[currentIndex];
});

/* ===============================
   TO-DO LIST
================================ */
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

document.getElementById("addTask").addEventListener("click", () => {
    if (taskInput.value === "") return;

    const li = document.createElement("li");
    li.textContent = taskInput.value;

    li.addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
});

/* ===============================
   FORM VALIDATION
================================ */
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert(" All fields are required!");
        e.preventDefault();
    } else if (!email.includes("@")) {
        alert(" Enter a valid email address!");
        e.preventDefault();
    } else {
        alert(" Message sent successfully!");
    }
});
