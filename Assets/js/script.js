var startButton = document.querySelector(".start-button");


function questions() {
    // Here is where the newly created element will be displayed.
    var questionsContent = document.getElementById("card-questions");
    // Create an element.
    var questionsHeader = document.createElement("form");
    // Give said element some content.
    questionsHeader.textContent = "this is the content";
    // Append this element to the card-questions div.
    questionsContent.appendChild(questionsHeader);
    // Style the element.
    questionsHeader.setAttribute("style", "display: flex; flex-direction: column; align-items: center; height: 190px; width: 400px; padding: 20px;");

    var questionsCard = document.createElement("section");
    questionsHeader.appendChild(questionsCard);
    questionsCard.setAttribute("style", "display:flex; padding: 25px;");

    var question1 = document.createElement("button");
    var question2 = document.createElement("button");
    var question3 = document.createElement("button");
    var question4 = document.createElement("button");

    question1.textContent = "content";
    question2.textContent = "content";
    question3.textContent = "content";
    question4.textContent = "content";

    question1.setAttribute("style", "display:flex; background-color: rgb(179, 231, 149); margin: 10px;");
    question2.setAttribute("style", "display:flex; background-color: rgb(179, 231, 149); margin: 10px;");
    question3.setAttribute("style", "display:flex; background-color: rgb(179, 231, 149); margin: 10px;");
    question4.setAttribute("style", "display:flex; background-color: rgb(179, 231, 149); margin: 10px;");

    questionsCard.appendChild(question1);
    questionsCard.appendChild(question2);
    questionsCard.appendChild(question3);
    questionsCard.appendChild(question4);
    
};

function beginQuiz() {
    questions();
    var secondsLeft = 120;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        startButton.textContent = "time remaining:\n" + secondsLeft + " seconds";
        
        
        // This section of code will run when the quiz is over.
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // This will link to the second html file?
            secondHtml();
        };
        
    }, 1000);
    
};

// Add an event listener to the start button. Calls function beginQuiz upon clicking.
startButton.addEventListener("click", beginQuiz);
// This calls the function that will run upon loading the page.
// init();
