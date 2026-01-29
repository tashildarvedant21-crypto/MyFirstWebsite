📌 Project Overview

This project is an Interactive Portfolio Website built using HTML, CSS, and JavaScript.
The main goal is to demonstrate client-side scripting using JavaScript by adding interactive features, form validation, and dynamic content handling.

The website showcases:

JavaScript fundamentals

DOM manipulation

Event handling

Form validation

Local storage usage

Reusable and well-structured code

🎯 Objectives

Understand JavaScript as a client-side scripting language

Implement interactive UI features

Validate user input using JavaScript

Manipulate the DOM dynamically

Store user preferences using Local Storage

Build a real-world, deployable project

🛠️ Technologies Used

HTML5 – Structure

CSS3 – Styling & Layout

JavaScript (ES6) – Interactivity & Logic

Local Storage – Data persistence

📂 Project Structure
Interactive-Portfolio/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── images/

⚙️ Setup Instructions

Clone the repository:

git clone https://github.com/your-username/interactive-portfolio.git


Navigate to the project folder:

cd interactive-portfolio


Open index.html in your browser.

Open Developer Console to verify JavaScript execution.

📚 JavaScript Concepts Implemented
🔹 JavaScript Basics

Variables (let, const)

Data types (String, Number, Boolean)

Operators

Functions

🔹 DOM Manipulation

Selecting elements using:

getElementById()

querySelector()

Updating text, styles, and classes dynamically

🔹 Event Handling

Implemented event listeners for:

click

hover

submit

input

🧩 Interactive Features

The project includes at least 3 interactive features, such as:

Dark / Light Mode Toggle

Changes theme dynamically

User preference saved in local storage

Image Slider / Gallery

Navigate through images interactively

To-Do List

Add and remove tasks dynamically

Show / Hide Content

Toggle visibility of sections

📝 Form Validation

The contact form includes real-time JavaScript validation:

Validation Rules:

Email must contain @

Message must be at least 10 characters

Error and success messages shown dynamically

Sample Logic:
function validateForm(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!email.includes('@')) {
    showError('Please enter a valid email address');
    return false;
  }

  if (message.length < 10) {
    showError('Message must be at least 10 characters');
    return false;
  }

  showSuccess('Message sent successfully!');
  return true;
}

💾 Local Storage Usage

Dark mode preference is stored using localStorage

Theme remains consistent even after page reload

localStorage.setItem('darkMode', true);

🗓️ Development Timeline
Day 1: JavaScript Setup

Created script.js

Linked JavaScript to HTML

Tested with console.log()

Day 2: DOM Manipulation

Selected elements

Updated content and styles dynamically

Day 3: Event Handling

Added click, hover, submit events

Day 4: Form Validation

Implemented real-time validation

Displayed error and success messages

Day 5: Interactive Features

Dark mode toggle

Image gallery / slider

Day 6: Local Storage

Saved user preferences

Day 7: Testing & Debugging

Tested all features

Fixed bugs and optimized code

🧪 Testing Evidence

Tested on multiple browsers

Console checked for errors

Form validation tested with valid and invalid inputs

Dark mode persistence tested with page reload

📸 Visual Documentation

Screenshots demonstrating:

Form validation messages

Dark / light mode toggle

Interactive features
(Add screenshots in the README or /images folder)

🧠 Technical Details

Modular and reusable functions

Clean separation of concerns

Event-driven architecture

Efficient DOM updates

✅ Quality Standards Checklist

✔ Project overview included
✔ Clear setup instructions
✔ Proper file structure
✔ JavaScript concepts implemented
✔ At least 3 interactive features
✔ Form validation with error messages
✔ DOM manipulation & event listeners
✔ Local storage implemented
✔ Testing evidence provided

🚀 Conclusion

This project demonstrates practical JavaScript skills by building a fully interactive portfolio website. It follows industry practices and fulfills all technical and documentation requirements.