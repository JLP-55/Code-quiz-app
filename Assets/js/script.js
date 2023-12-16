// Add a query selector to the html div with class="start-button"
var startButton = document.querySelector(".start-button");

// Gets the div with the id "#card"
var questionsContent = document.getElementById("card");
var allQuestions = [question1, question2, question3, question4];

var questionsHeader = document.createElement("form");
var questionsCard = document.createElement("section");
var question1 =  document.createElement("button");
var question2 =  document.createElement("button");
var question3 =  document.createElement("button");
var question4 =  document.createElement("button");

// function beginQuiz() {
//     secondsLeft = 120;
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         startButton.textContent = "time remaining:\n" + secondsLeft + " seconds";
        
//         if (secondsLeft === 0) {
//             clearInterval(timerInterval);
//             objBegin.highScores();
//         };
//         objBegin.beginQuiz();
//     }, 10);
// }

var objBegin = {
    // questionsHeader: document.createElement = "form",
    // questionsCard: document.createElement = "section",
    // question1:document.createElement = "button",
    // question2:document.createElement = "button",
    // question3:document.createElement = "button",
    // question4:document.createElement = "button",

    beginQuiz: function() {          
        secondsLeft = 120;
        var timerInterval = setInterval(function() {
            secondsLeft--;
            startButton.textContent = "time remaining:\n" + secondsLeft + " seconds";
            
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                highScores();
            };
        }, 10);
        
        questions();
        
        function questions() {       
            // Form: give content, style, append.
            questionsHeader.textContent = "this is the content";
            questionsHeader.setAttribute("style", "display: flex; flex-direction: column; align-items: center; height: 190px; width: 400px; padding: 20px;");
            questionsContent.appendChild(questionsHeader);
            
            // Section: style, append.
            questionsCard.setAttribute("style", "display:flex; margin-top: 300px; padding: 25px;");
            questionsHeader.appendChild(questionsCard);
            
            // Button: give content, style, append.
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

            question1.addEventListener("click", nextQuestion);
            question2.addEventListener("click", objBegin.secondsLeft-10);
            // if (allQuestions[0]) {
            //     nextQuestion();
            // } else if (allQuestions[1] || allQuestions[2] || allQuestions[3]) {
            //     secondsLeft-10;
            // };
        };
        
        function nextQuestion() {
            // Form: give content, style, append.
            questionsHeader.textContent = "this is the content again";
            questionsHeader.setAttribute("style", "display: flex; flex-direction: column; align-items: center; height: 190px; width: 400px; padding: 20px;");
            questionsContent.appendChild(questionsHeader);
            
            // Section: style, append.
            questionsCard.setAttribute("style", "display:flex; margin-top: 300px; padding: 25px;");
            questionsHeader.appendChild(questionsCard);
            
            // Button: give content, style, append.
            question1.textContent = "more content";
            question2.textContent = "more content";
            question3.textContent = "more content";
            question4.textContent = "more content";    
            // question1.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
            // question2.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
            // question3.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
            // question4.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");    
            // questionsCard.appendChild(question1);
            // questionsCard.appendChild(question2);
            // questionsCard.appendChild(question3);
            // questionsCard.appendChild(question4);
            
            question1.addEventListener("click", nextQuestion2);
            question2.addEventListener("click", secondsLeft = -10);
            // if (allQuestions[0]) {
            //     nextQuestion2();
            // } else if (allQuestions[1] || allQuestions[2] || allQuestions[3]) {
            //     secondsLeft-10;
            // };
        };
        
        function nextQuestion2() {
            // Form: give content, style, append.
            questionsHeader.textContent = "this is also the content";
            questionsHeader.setAttribute("style", "display: flex; flex-direction: column; align-items: center; height: 190px; width: 400px; padding: 20px;");
            questionsContent.appendChild(questionsHeader);
            
            // Section: style, append.
            questionsCard.setAttribute("style", "display:flex; margin-top: 300px; padding: 25px;");
            questionsHeader.appendChild(questionsCard);
            
            // Button: give content, style, append.
            question1.textContent = "further content";
            question2.textContent = "further content";
            question3.textContent = "further content";
            question4.textContent = "further content";    
            // question1.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
            // question2.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
            // question3.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
            // question4.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");    
            // questionsCard.appendChild(question1);
            // questionsCard.appendChild(question2);
            // questionsCard.appendChild(question3);
            // questionsCard.appendChild(question4);
            
            if (allQuestions[0]) {
                nextQuestion2();
            } else if (allQuestions[1] || allQuestions[2] || allQuestions[3]) {
                secondsLeft-10;
            };
        };

        function highScores() {
            questionsContent.setAttribute("style", "display:none");

            var highScroresEl = document.getElementById("card-2");
            
            var container = document.createElement("section");
            container.setAttribute("style", "display:flex; flex-direction:column; justify-content: space-around; align-items:center; margin-top: 25px; font-size: 58px; border:solid; border-radius: 12px; height:300px; width:400px; background-color:rgb(179, 231, 149);");
            highScroresEl.appendChild(container);
            container.textContent = "High Scores";

            var enterInitials = document.createElement("textarea");
            enterInitials.setAttribute("style", "height:40px; width:150px; text-align: center; font-size:25px;");
            container.appendChild(enterInitials);
            
        }
    },
};

// Add an event listener to the start button. Calls function beginQuiz upon clicking.
startButton.addEventListener("click", objBegin.beginQuiz);