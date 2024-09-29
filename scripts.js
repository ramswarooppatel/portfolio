// Greet the user with an alert
alert("Welcome to the portfolio of RAMSWAROOP PATEL");

// Ask the user for their full name and store it in localStorage
let username = prompt("Enter your full name below:");
localStorage.setItem("full_name", `${username}`);
let admin = "RAMSWAROOP PATEL";

// Display a welcome message on the page
document.getElementById("welcome-message").innerText = `Hello ${username || 'Guest'}, Welcome to ${admin}'s Portfolio`;

let currentActiveTab = document.querySelector('.navbar a'); // Default active tab

// Function to show the section and handle tab highlighting
function showSection(sectionId, clickedTab) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Show the clicked section
    document.getElementById(sectionId).classList.add('active');

    // Remove active-tab class from the previously active tab
    if (currentActiveTab) {
        currentActiveTab.classList.remove('active-tab');
    }

    // Add active-tab class to the clicked tab
    clickedTab.classList.add('active-tab');

    // Update the currentActiveTab to the newly clicked one
    currentActiveTab = clickedTab;
}

// Toggle the navbar for mobile view
function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Secret code visibility toggle with password protection
const secretCode = "RA2411030040013";
const maskedCode = "RA2411*********";
const correctPassword = "ram$is2kool4u"; // Set your correct password here
let isMasked = true;
let isAuthenticated = false; // New variable to track if the user is authenticated

function toggleSecretCode() {
    const codeInput = document.getElementById("secret-code");
    const eyeIcon = document.getElementById("eye-icon-img");

    const visibleEyeIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWV5ZS1vZmYiPjxwYXRoIGQ9Ik0xMC43MzMgNS4wNzZhMTAuNzQ0IDEwLjc0NCAwIDAgMSAxMS4yMDUgNi41NzUgMSAxIDAgMCAxIDAgLjY5NiAxMC43NDcgMTAuNzQ3IDAgMCAxLTEuNDQ0IDIuNDkiLz48cGF0aCBkPSJNMTQuMDg0IDE0LjE1OGEzIDMgMCAwIDEtNC4yNDItNC4yNDIiLz48cGF0aCBkPSJNMTcuNDc5IDE3LjQ5OWExMC43NSAxMC43NSAwIDAgMS0xNS40MTctNS4xNTEgMSAxIDAgMCAxIDAtLjY5NiAxMC43NSAxMC43NSAwIDAgMSA0LjQ0Ni01LjE0MyIvPjxwYXRoIGQ9Im0yIDIgMjAgMjAiLz48L3N2Zz4=";
    const hiddenEyeIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2g9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtZXllIj48cGF0aCBkPSJNMi4wNjIgMTIuMzQ4YTEgMSAwIDAgMSAwLS42OTYgMTAuNzUgMTAuNzUgMCAwIDEgMTkuODc2IDAgMSAxIDAgMCAxIDAgLjY5NiAxMC43NSAxMC43NSAwIDAgMS0xOS44NzYgMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz48L3N2Zz4=";

    // Only ask for the password if the code is currently masked and the user hasn't authenticated yet
    if (isMasked && !isAuthenticated) {
        const userPassword = prompt(`Please enter the password to view the full code ASK ${admin} through instagram-@ramswaroop03:`);

        if (userPassword === correctPassword) {
            isAuthenticated = true; // Set the user as authenticated
        } else {
            alert("Incorrect password! The full code is not visible.");
            return; // Exit the function early if the password is incorrect
        }
    }

    if (isMasked) {
        codeInput.value = secretCode; // Show full code
        eyeIcon.src = visibleEyeIcon; // Switch to "visible" eye icon
    } else {
        codeInput.value = maskedCode; // Show masked code
        eyeIcon.src = hiddenEyeIcon; // Switch to "hidden" eye icon
    }

    isMasked = !isMasked;
}

// Function to send an email
function contact() {
    window.location.href = "mailto:ramwaroop.exe@gmail.com";
}

// Function to open a new tab for social networking
function sh() {
    window.open("http://ramswaroop.social-networking.me", "_blank");
}
