// script.js

document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('nav.categories a');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const categoryId = event.target.getAttribute('href').substring(1);
            const categorySection = document.getElementById(categoryId);
            
            // Toggle visibility of the section
            categorySection.classList.toggle('active');
        });
    });
});
