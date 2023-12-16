var startButton = document.querySelector(".start-button");
var allQuestions = [question1, question2, question3, question4];

var question1 = document.createElement("button");
var question2 = document.createElement("button");
var question3 = document.createElement("button");
var question4 = document.createElement("button");

var questionsHeader = document.createElement("form");
var questionsCard = document.createElement("section");

var questionsObject = {
    questionsContent: document.getElementById("card-questions"),
    questionsHeader: document.createElement("form"),
    questionsHeader: textContent = "this is the content",
    // questionsContent: appendChild(questionsHeader),
    // questionsHeader: setAttribute("style", "display: flex; flex-direction: column; align-items: center; height: 190px; width: 400px; padding: 20px;"),
    
    questionsCard: document.createElement("section"),
    // questionsHeader: appendChild(questionsCard),
    // questionsCard: setAttribute("style", "display:flex; padding: 25px;"),
    
    // question1: document.createElement("button"),
    // question2: document.createElement("button"),
    // question3: document.createElement("button"),
    // question4: document.createElement("button"),
    
    question1: textContent = "content",
    question2: textContent = "content",
    question3: textContent = "content",
    question4: textContent = "content",
    
    // questionsCard: appendChild(question1),
    // questionsCard: appendChild(question2),
    // questionsCard: appendChild(question3),
    // questionsCard: appendChild(question4),
}

// console.log(questionsObject);

function questions() {   
    console.log(questionsObject) ;
    
    // Here is where the newly created element will be displayed.
    var questionsContent = document.getElementById("card-questions");
    // Create an element.
    // var questionsHeader = document.createElement("form");
    // Give said element some content.
    questionsHeader.textContent = "this is the content";
    // Append this element to the card-questions div.
    questionsContent.appendChild(questionsHeader);
    // Style the element.
    questionsHeader.setAttribute("style", "display: flex; flex-direction: column; align-items: center; height: 190px; width: 400px; padding: 20px;");
    
    // var questionsCard = document.createElement("section");
    questionsHeader.appendChild(questionsCard);
    questionsCard.setAttribute("style", "display:flex; padding: 25px;");
    
    // var question1 = document.createElement("button");
    // var question2 = document.createElement("button");
    // var question3 = document.createElement("button");
    // var question4 = document.createElement("button");
    
    question1.textContent = "content";
    question2.textContent = "content";
    question3.textContent = "content";
    question4.textContent = "content";
    
    question1.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
    question2.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
    question3.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
    question4.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
    
    questionsCard.appendChild(question1);
    questionsCard.appendChild(question2);
    questionsCard.appendChild(question3);
    questionsCard.appendChild(question4);
    
    
    if (allQuestions[0]) {
        nextquestion();
    } else if (allQuestions[1] || allQuestions[2] || allQuestions[3]) {
        return;
    };
    
};

function nextquestion() {
    questionsHeader.textContent = "this is the content again";
    
    question1.textContent = "more content";
    question2.textContent = "more content";
    question3.textContent = "more content";
    question4.textContent = "more content";   
}

var objBegin = {
    beginQuiz: function() {
        questions();
        secondsLeft = 120;
        var timerInterval = setInterval(function() {
            secondsLeft--;
            startButton.textContent = "time remaining:\n" + secondsLeft + " seconds";

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
            };

        }, 1000);
    }
}

// function beginQuiz() {
//     questions();
//     var secondsLeft = 120;
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         startButton.textContent = "time remaining:\n" + secondsLeft + " seconds";
        
        
//         // This section of code will run when the quiz is over.
//         if (secondsLeft === 0) {
//             clearInterval(timerInterval);
//             // This will link to the second html file?
//             secondHtml();
//         };
        
//     }, 1000);
    
// };

// Add an event listener to the start button. Calls function beginQuiz upon clicking.
startButton.addEventListener("click", objBegin.beginQuiz);
// This calls the function that will run upon loading the page.
// init();
