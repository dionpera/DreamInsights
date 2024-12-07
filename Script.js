// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {

    // Get all the category links in the navigation
    const categoryLinks = document.querySelectorAll('nav.categories a');
    
    // Loop through each category link and add an event listener for the click event
    categoryLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent default link behavior
            
            // Get the id of the category section from the link href attribute
            const categoryId = event.target.getAttribute('href').substring(1);
            
            // Get the corresponding category section by its id
            const categorySection = document.getElementById(categoryId);
            
            // If the category section exists, toggle the 'active' class
            if (categorySection) {
                categorySection.classList.toggle('active');
            }
        });
    });

    // Functionality for Home Button
    const homeButton = document.querySelector('.home-button');
    if (homeButton) {
        homeButton.addEventListener('click', function () {
            window.location.href = 'index.html'; // Redirects to the home page
        });
    }

    // Functionality for closing any open sections (if necessary)
    const closeButtons = document.querySelectorAll('.close-section');  // If you have a close button for sections
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const section = button.closest('.category-section');  // Find the closest section to close
            if (section) {
                section.classList.remove('active'); // Remove the 'active' class to hide the section
            }
        });
    });

    // Optional: Automatically close any section if another is opened (toggle style)
    const toggleSections = document.querySelectorAll('.category-section');
    toggleSections.forEach(section => {
        section.addEventListener('click', function () {
            // Check if the section is already active, then close it
            if (section.classList.contains('active')) {
                section.classList.remove('active');
            } else {
                // Hide other sections before showing this one (optional behavior)
                toggleSections.forEach(otherSection => {
                    otherSection.classList.remove('active');
                });
                section.classList.add('active');
            }
        });
    });

});
// Example: Adding 'active' class to the current page link
document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
function generateMantra() {
    const mantras = [
        "I embrace the flow of life and trust in my journey.",
        "My dreams guide me toward my true purpose.",
        "I release what no longer serves me and welcome peace.",
        "I am grounded, strong, and deeply connected to myself.",
        "My emotions flow freely and guide me to clarity.",
        "I see the beauty in every stage of life.",
        "I am open to love, growth, and endless possibilities."
    ];

    // Generate a random mantra
    const randomMantra = mantras[Math.floor(Math.random() * mantras.length)];

    // Display the mantra
    document.getElementById('mantra-display').textContent = randomMantra;
}
// JavaScript for Mantra Generator
document.addEventListener("DOMContentLoaded", () => {
    const mantras = [
        "Dream big and dare to fail.",
        "Your dreams are valid.",
        "Believe in yourself and all that you are.",
        "Success is the progressive realization of a worthy dream.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Every great dream begins with a dreamer."
    ];

    const mantraDisplay = document.getElementById("mantra-display");
    const mantraButton = document.querySelector(".mantra-generator button");

    // Function to generate a random mantra
    const generateMantra = () => {
        const randomIndex = Math.floor(Math.random() * mantras.length);
        mantraDisplay.textContent = mantras[randomIndex];
    };

    // Add event listener to the button
    mantraButton.addEventListener("click", generateMantra);
});
// script.js
document.getElementById("generateMantraButton").addEventListener("click", function() {
  // Array of mantras
  const mantras = [
    "I am the master of my fate.",
    "Peace begins with a smile.",
    "The only way out is through.",
    "You are enough just as you are.",
    "Let it go, and let yourself grow.",
    "Breathe in calm, breathe out stress.",
    "Every day is a new beginning.",
    "This too shall pass.",
    "I attract positivity and abundance.",
    "I am grateful for this moment."
  ];

  // Function to pick a random mantra
  const randomMantra = mantras[Math.floor(Math.random() * mantras.length)];

  // Display the generated mantra
  document.getElementById("mantraDisplay").textContent = randomMantra;
});
