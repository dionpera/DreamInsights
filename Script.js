const categories = {
    animals: {
        title: "Animals",
        items: {
            "Mammals": "Symbolize strength, instincts, and nurturing.",
            "Aquatic Animals": "Represent emotions and subconscious thoughts.",
            "Birds": "Signify freedom, perspective, and spirituality.",
            "Reptiles": "Indicate transformation and primal energy.",
            "Insects": "Reflect small annoyances or industriousness.",
            "Arachnids": "Suggest creativity and patience."
        }
    },
    relationships: {
        title: "Relationships",
        items: {
            "Mother": "Represents nurturing and unconditional love.",
            "Father": "Symbolizes authority and protection.",
            "Sibling": "Refers to camaraderie or unresolved tensions.",
            "Partner (Positive)": "Signifies emotional connection and trust.",
            "Partner (Negative)": "Indicates insecurity or betrayal."
        }
    },
    "property-types": {
        title: "Property Types",
        items: {
            "Cottage": "Symbol of simplicity and tranquility.",
            "Flat": "Represents a compartmentalized life.",
            "Mansion": "Indicates success or ambition.",
            "Log Cabin": "Signifies a desire for simplicity.",
            "Terrace House": "Represents community and shared experiences.",
            "Igloo": "Symbolizes adaptability and protection."
        }
    },
    places: {
        title: "Places",
        items: {
            "City": "Represents ambition and activity.",
            "Park": "Symbol of relaxation and natural harmony.",
            "Zoo": "Indicates control or confinement.",
            "Hospital": "Signifies healing and restoration."
        }
    },
    "popular-searches": {
        title: "Popular Searches",
        items: {
            "Flying": "Symbol of freedom and aspiration.",
            "Falling": "Indicates insecurity or loss of control.",
            "Being Chased": "Reflects avoidance or fear of confrontation."
        }
    }
};

document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        const detailsSection = document.getElementById('dream-details');
        const categoryTitle = document.getElementById('category-title');

        if (categories[category]) {
            categoryTitle.textContent = categories[category].title;
            const items = categories[category].items;
            detailsSection.innerHTML = Object.entries(items)
                .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
                .join('');
        }
    });
});
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
