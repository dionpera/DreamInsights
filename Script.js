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
<!-- HTML -->
<div class="mantra-generator">
    <h3>Mantra Generator</h3>
    <button id="generateMantraButton">Generate Mantra</button>
    <p id="mantraDisplay">Your mantra will appear here...</p>
</div>

<script>
    // JavaScript for Mantra Generator
    document.addEventListener("DOMContentLoaded", () => {
        const mantras = [
            "Dream big and dare to fail.",
            "Your dreams are valid.",
            "Believe in yourself and all that you are.",
            "Success is the progressive realization of a worthy dream.",
            "The future belongs to those who believe in the beauty of their dreams.",
            "Every great dream begins with a dreamer.",
            "I am the master of my fate.",
            "Peace begins with a smile.",
            "The only way out is through.",
            "You are enough just as you are.",
            "Let it go, and let yourself grow.",
            "Breathe in calm, breathe out stress.",
            "Every day is a new beginning.",
            "This too shall pass.",
            "I attract positivity and abundance.",
            "I am grateful for this moment.",
            "I embrace the flow of life and trust in my journey.",
            "My dreams guide me toward my true purpose.",
            "I release what no longer serves me and welcome peace.",
            "I am grounded, strong, and deeply connected to myself.",
            "My emotions flow freely and guide me to clarity.",
            "I see the beauty in every stage of life.",
            "I am open to love, growth, and endless possibilities.",
            "I am becoming the best version of myself every day.",
            "Happiness is a choice, and today I choose joy.",
            "I am stronger than my challenges and wiser because of them.",
            "Every breath I take fills me with calm and confidence.",
            "I release what I cannot control and embrace peace.",
            "The universe is conspiring in my favor.",
            "My mind is clear, my body is healthy, and my soul is at peace.",
            "Success flows effortlessly to me.",
            "I am grateful for the abundance that surrounds me.",
            "I trust the process of life and its infinite possibilities.",
            "I radiate positivity, kindness, and love.",
            "Challenges are opportunities to grow and learn.",
            "I am proud of how far I have come and excited for what’s ahead.",
            "My potential is limitless, and I am fearless in pursuit of my goals.",
            "I am grounded, focused, and strong.",
            "I welcome new beginnings with open arms.",
            "The power to create my dreams is within me.",
            "I am a magnet for good energy and positivity.",
            "I forgive myself and others, freeing myself from the past.",
            "I deserve love, success, and happiness in abundance.",
            "Every step I take is filled with purpose and clarity.",
            "I am exactly where I need to be in this moment.",
            "My heart is open, and love flows freely through me.",
            "I am resilient, resourceful, and determined.",
            "I have the courage to embrace my uniqueness and shine."
        ];

        const mantraDisplay = document.getElementById("mantraDisplay");
        const mantraButton = document.getElementById("generateMantraButton");

        // Function to generate a random mantra
        const generateMantra = () => {
            const randomIndex = Math.floor(Math.random() * mantras.length);
            mantraDisplay.textContent = mantras[randomIndex];
        };

        // Add event listener to the button
        mantraButton.addEventListener("click", generateMantra);
    });
</script>
    
<script>
  // Function to create stars
  function createStars() {
    const starContainer = document.querySelector('.stars');
    
    for (let i = 0; i < 10; i++) { // Number of stars
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 50}px`; // Random position within the container
      star.style.left = `${Math.random() * 50}px`;
      star.style.animationDelay = `${Math.random() * 2}s`; // Staggered animations
      starContainer.appendChild(star);
    }
  }

  // Initialize stars
  createStars();
</script>
</body>

});
document.getElementById("playButton").addEventListener("click", function() {
  document.getElementById("backgroundMusic").play();
});

document.getElementById("pauseButton").addEventListener("click", function() {
  document.getElementById("backgroundMusic").pause();
});
document.getElementById("backgroundMusic").volume = 0.5; // 50% volume
});
// Ensure the audio is correctly initialized
const audio = document.getElementById('backgroundMusic');

// Button and controls
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const volumeControl = document.getElementById('volumeControl');

// Function to play the audio
function playAudio() {
    audio.play().then(() => {
        playButton.style.display = 'none';  // Hide play button when audio plays
        pauseButton.style.display = 'block';  // Show pause button
    }).catch((error) => {
        console.error('Error playing the audio: ', error);
    });
}

// Function to pause the audio
function pauseAudio() {
    audio.pause();
    playButton.style.display = 'block';  // Show play button
    pauseButton.style.display = 'none';  // Hide pause button
}

// Event listeners for the play and pause buttons
playButton.addEventListener('click', playAudio);
pauseButton.addEventListener('click', pauseAudio);

// Volume control event listener
volumeControl.addEventListener('input', (event) => {
    audio.volume = event.target.value;  // Adjust the volume based on user input
});

// Ensure that the music starts after the user clicks on the page to bypass autoplay restrictions
document.body.addEventListener('click', () => {
    if (audio.paused) {
        playAudio();  // Play the audio if it's paused
    }
}, { once: true });  // This ensures it runs only once on the first user interaction
