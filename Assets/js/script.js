var startButton = document.querySelector(".quiz-begin");

function beginQuiz() {
    var secondsLeft = 120;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        startButton.textContent = secondsLeft + "time remaining";

        // This section of code will run when the quiz is over.
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            // This will link to the second html file?
            secondHtml();
        };
    }, 10);
};

// Add an event listener to the start button. Calls function beginQuiz upon clicking.
startButton.addEventListener("click", beginQuiz);
// This calls the function that will run upon loading the page.
init();