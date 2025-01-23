const options = document.querySelectorAll('.option'); // Assuming buttons have the class "option"
let score = 0;
let container = document.querySelector(".container")

window.onload = sendApiRequest();

async function sendApiRequest() {
    container.style.backgroundColor = "white";
    try {
        let response = await fetch('https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple');
        let data = await response.json();

        // Check if response code is 5
        if (data.response_code === 5) {
            alert("Please do not refresh too quickly. Retrying in 5 seconds...");
            setTimeout(sendApiRequest, 5000); // Retry the API request after 5 seconds
        } else {
            useApiData(data); // Process the data if the response code is valid
        }
    } catch (error) {
        console.error("An error occurred while fetching the API:", error);
    }
}

function useApiData(data) {
    let optionsArray = [data.results[0].correct_answer, ...data.results[0].incorrect_answers];
    optionsArray = shuffleArray(optionsArray);

    document.querySelector(".categoryName").innerHTML = `Category: ${data.results[0].category}`;
    document.querySelector("#questionTitle").innerHTML = data.results[0].question;

    // Assign options to buttons
    options.forEach((button, index) => {
        button.innerHTML = optionsArray[index];
        button.style.display = "block"; // Ensure buttons are visible for the new question
        button.onclick = () => {
            // Hide all buttons after selecting one
            options.forEach(btn => {
                btn.style.display = "none"; // Hides the button
            });

            if (button.innerHTML === data.results[0].correct_answer) {
                container.style.backgroundColor = "#b4d410"; // Green background for correct answer
                
                score++;
                console.log(`Score: ${score}`);
            } else {
                container.style.backgroundColor = "#ff6347"; // Red background for wrong answer
                
                console.log(`Score: ${score}`);
            }
            document.querySelector('.score').innerHTML = score;

            // Reset background after 2 seconds, and fetch a new question after 5 seconds
            

            setTimeout(sendApiRequest, 5000);
        };
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
