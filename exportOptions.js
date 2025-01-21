// Store the selected difficulty value
let selectedDifficulty = "";
let diff ="";
// Select all the options
const options = document.querySelectorAll('.option');

// Add click event listeners to each option
options.forEach(option => {
    option.addEventListener('click', () => {
        selectedDifficulty = option.getAttribute('data-difficulty'); // Update the selected difficulty
        console.log(`Selected difficulty: ${selectedDifficulty}`); // Log the selected difficulty for confirmation
        
        // Check the difficulty after it is updated
        if (selectedDifficulty === 'easy') {
            console.log("eassayy")
        }else if (selectedDifficulty === 'medium') {
            console.log("mkedumed")
        }else if (selectedDifficulty === 'hard') {
            console.log("hardfd")
        }
    });
});

