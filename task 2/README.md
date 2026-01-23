# 🎯 Styled Portfolio Website using CSS

## 📌 Project Overview
This project focuses on building a **visually appealing and responsive personal portfolio website** using **HTML and CSS**.  
The goal is to understand core CSS concepts such as selectors, box model, layouts, responsiveness, and styling techniques, and apply them in a real-world project.

---

## 📚 Theory Concepts Covered

### What is CSS?
CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, layouts, and responsiveness.

### CSS Selectors Used
- **Element Selector** (`body`, `header`, `section`)
- **Class Selector** (`.container`, `.nav-links`)
- **ID Selector** (`#contact`)
- **Pseudo-classes** (`:hover`, `:focus`)

### CSS Properties
- Color & Background
- Font & Typography
- Border, Margin, Padding
- Width, Height, Display

### CSS Box Model
- **Content** – actual data
- **Padding** – space inside the border
- **Border** – outline of the element
- **Margin** – space outside the element

### CSS Positioning
- `static`
- `relative`
- `absolute`
- `fixed`

### Responsive Design Basics
- Media Queries
- Flexible layouts using Flexbox and Grid

---

## 🛠️ Hands-On Practice Implemented

- Created an **external `style.css` file**
- Styled text using **custom Google Fonts**
- Added **background colors and gradients**
- Implemented **hover effects** on buttons and links
- Built a **responsive navigation menu**
- Centered elements using **Flexbox and Grid**

---

## 🎨 Project Features

- Clean and modern UI
- Attractive color scheme
- Hover effects & transitions
- Mobile-friendly layout
- Reusable CSS variables
- Responsive navigation bar

---

## 🛠️ Technical Requirements Fulfilled

✔ External `style.css` file  
✔ Minimum **3 CSS selectors**  
✔ Hover effects for buttons and links  
✔ Responsive design for mobile screens  
✔ Layout using **Flexbox and CSS Grid**  
✔ Custom fonts and consistent color scheme  

---

## 📋 Step-by-Step Development Guide

### 🗓️ Day 1: Setup CSS
- Created `style.css`
- Linked CSS to HTML
- Reset default browser styles

### 🗓️ Day 2: Typography & Colors
- Added Google Fonts
- Defined color scheme using CSS variables

### 🗓️ Day 3: Layout & Spacing
- Implemented Flexbox & Grid
- Added margins and padding

### 🗓️ Day 4: Interactive Elements
- Hover effects
- Transitions and animations

### 🗓️ Day 5: Responsive Design
- Media queries for tablets and mobile devices

### 🗓️ Day 6: Advanced Styling
- Styled forms and images
- Enhanced UI components

### 🗓️ Day 7: Optimization & Testing
- Tested across browsers
- Optimized layout and responsiveness

---

## 💻 Sample CSS Code Used

```css
/* Reset default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Color scheme */
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
}

/* Header styling */
header {
  background-color: var(--secondary-color);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Responsive design */
@media (max-width: 768px) {
  header {
    flex-direction: column;
  }
}
📂 Project Folder Structure
pgsql
Copy code
project-root/
│
├── index.html
├── style.css
├── README.md
│
├── images/
│   └── profile.jpg
│
├── screenshots/
│   └── homepage.png
│   └── mobile-view.png
⚙️ Setup Instructions
Clone the repository:

bash
Copy code
git clone <repository-url>
Open index.html in a web browser

Ensure style.css is linked properly

View responsiveness using browser developer tools

🧪 Testing & Validation
Tested on Chrome, Edge, and Firefox

Checked responsiveness on mobile and tablet screens

Validated CSS using browser dev tools

📊 Design Decisions
Used CSS variables for consistent theming

Flexbox for navigation layout

Grid for main content layout

Gradients for modern UI appearance

Minimal yet professional design

📸 Visual Documentation
Screenshots included inside the screenshots/ folder:

Desktop view

Mobile responsive view

Hover interactions

✅ Quality Standards Checklist
✔ Clear project overview
✔ Complete setup instructions
✔ Clean file hierarchy
✔ Well-commented and organized code
✔ Visual screenshots included
✔ Responsive design implemented
✔ All technical requirements satisfied

🎉 Conclusion
This project demonstrates practical knowledge of CSS fundamentals, responsive design, and modern styling techniques.
It serves as a strong foundation for building real-world websites and portfolios.