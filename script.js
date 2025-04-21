document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.getElementById("welcome-text");
    const changeTextButton = document.getElementById("change-text-button");
    const changeStyleButton = document.getElementById("change-style-button");
    const toggleElementButton = document.getElementById("toggle-element-button");
    const featuresList = document.getElementById("features-list");
    const body = document.body;

    let additionalItemExists = false;
    let additionalItem = null;

    // Change text content dynamically
    changeTextButton.addEventListener("click", function() {
        if (welcomeText.innerText === "Welcome to JavaScript DOM Manipulation!") {
            welcomeText.innerText = "Hello, text changed with JavaScript!";
        }
        else {
            welcomeText.innerText = "Welcome to JavaScript DOM Manipulation!";
        }

        welcomeText.classList.add("highlight");
        setTimeout(() => {
            welcomeText.classList.remove("highlight");
        }, 1000);
    });

    // Modify CSS styles via JavaScript
    changeStyleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            changeStyleButton.textContent = 'Dark Mode'; // Corrected to match dark mode
        } else {
            changeStyleButton.textContent = 'Light Mode'; // Corrected to match light mode
        }
    });

    // Add or remove an element when a button is clicked
    toggleElementButton.addEventListener('click', function() {
        if (!additionalItemExists) {
            // Create new list item
            additionalItem = document.createElement('li');
            additionalItem.textContent = 'What should I do next?';
            additionalItem.classList.add('highlight');
            featuresList.appendChild(additionalItem);
            toggleElementButton.textContent = 'Remove List Item';
            additionalItemExists = true;
        } else {
            // Remove the additional item
            featuresList.removeChild(additionalItem);
            toggleElementButton.textContent = 'Add List Item';
            additionalItemExists = false;
        }
    });
});