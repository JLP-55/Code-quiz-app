// Add a query selector to the html div with class="start-button"
var startButton = document.querySelector(".start-button");

// Gets the div with the id "#card"
var questionsContent = document.getElementById("card");
var allQuestions = [question1, question2, question3, question4];

var secondsLeft = questionArray.length * 15;

// Create the timerInterval in the global scope instead of in the begin quiz function
var timerInterval = ""

var questionsHeader = document.createElement("h3");
var questionsCard = document.createElement("section");
var question1 =  document.createElement("button");
var question2 =  document.createElement("button");
var question3 =  document.createElement("button");
var question4 =  document.createElement("button");
var index = 0;

var paraEl = document.createElement("p");
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
        // secondsLeft = 120;
        timerInterval = setInterval(function() {
            secondsLeft--;
            startButton.textContent = "time remaining:\n" + secondsLeft + " seconds";
            
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                highScores();
            };

        // Run the above function every 1000 milliseconds.
        }, 1000);
        
        questions();
        
        function questions() { 
            // Resets the paraEl from the value given in nextQuestion function.
            // paraEl.textContent = "";

            // h3: give content, style, append.
            questionsHeader.textContent = questionArray[index].question;
            questionsHeader.setAttribute("style", "display: flex; flex-direction: column; align-items: center; height: 190px; width: 400px; padding: 20px;");
            questionsContent.appendChild(questionsHeader);
            
            // Section: style, append.
            questionsCard.setAttribute("style", "display:flex; margin-top: 300px; padding: 25px;");
            questionsHeader.appendChild(questionsCard);
            
            // Button: give content, style, append.
            question1.textContent = questionArray[index].choices[0];
            question2.textContent = questionArray[index].choices[1];
            question3.textContent = questionArray[index].choices[2];
            question4.textContent = questionArray[index].choices[3];    
            question1.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
            question2.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
            question3.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
            question4.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");    
            questionsCard.appendChild(question1);
            questionsCard.appendChild(question2);
            questionsCard.appendChild(question3);
            questionsCard.appendChild(question4);

            // p: style, append.
            paraEl.setAttribute("style", "");
            questionsCard.appendChild(paraEl);

            questionsCard.addEventListener("click", nextQuestion);
            // 
            // question2.addEventListener("click", objBegin.secondsLeft-10);
            // if (allQuestions[0]) {
            //     nextQuestion();
            // } else if (allQuestions[1] || allQuestions[2] || allQuestions[3]) {
            //     secondsLeft-10;
            // };
        };
        
        function nextQuestion(event) {
            var userChoice = event.target.textContent;
            var answer = questionArray[index].answer;
            if (userChoice === answer) {
                paraEl.textContent = "Correct";
            } else {
                paraEl.textContent = "Wrong";
                secondsLeft = secondsLeft -10;
            };
            index++;
            setTimeout(questions, 500);

            // questions();
            // Form: give content, style, append.
            // questionsHeader.textContent = "this is the content again";
            // questionsHeader.setAttribute("style", "display: flex; flex-direction: column; align-items: center; height: 190px; width: 400px; padding: 20px;");
            // questionsContent.appendChild(questionsHeader);
            
            // // Section: style, append.
            // questionsCard.setAttribute("style", "display:flex; margin-top: 300px; padding: 25px;");
            // questionsHeader.appendChild(questionsCard);
            
            // // Button: give content, style, append.
            // question1.textContent = "more content";
            // question2.textContent = "more content";
            // question3.textContent = "more content";
            // question4.textContent = "more content";    
            // question1.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
            // question2.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
            // question3.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
            // question4.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");    
            // questionsCard.appendChild(question1);
            // questionsCard.appendChild(question2);
            // questionsCard.appendChild(question3);
            // questionsCard.appendChild(question4);
            
            // question1.addEventListener("click", nextQuestion2);
            // question2.addEventListener("click", secondsLeft = -10);
            // if (allQuestions[0]) {
            //     nextQuestion2();
            // } else if (allQuestions[1] || allQuestions[2] || allQuestions[3]) {
            //     secondsLeft-10;
            // };
        };
        
        // function nextQuestion2() {
        //     // Form: give content, style, append.
        //     questionsHeader.textContent = "this is also the content";
        //     questionsHeader.setAttribute("style", "display: flex; flex-direction: column; align-items: center; height: 190px; width: 400px; padding: 20px;");
        //     questionsContent.appendChild(questionsHeader);
            
        //     // Section: style, append.
        //     questionsCard.setAttribute("style", "display:flex; margin-top: 300px; padding: 25px;");
        //     questionsHeader.appendChild(questionsCard);
            
        //     // Button: give content, style, append.
        //     question1.textContent = "further content";
        //     question2.textContent = "further content";
        //     question3.textContent = "further content";
        //     question4.textContent = "further content";    
        //     // question1.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
        //     // question2.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
        //     // question3.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");
        //     // question4.setAttribute("style", "display:flex; justify-content:center; align-items:center; background-color: rgb(179, 231, 149); margin: 10px; height:35px; width: 150px;");    
        //     // questionsCard.appendChild(question1);
        //     // questionsCard.appendChild(question2);
        //     // questionsCard.appendChild(question3);
        //     // questionsCard.appendChild(question4);
            
        //     if (allQuestions[0]) {
        //         nextQuestion2();
        //     } else if (allQuestions[1] || allQuestions[2] || allQuestions[3]) {
        //         secondsLeft-10;
        //     };
        // };

        function highScores() {
            questionsContent.setAttribute("style", "display:none");

            var highScoresEl = document.getElementById("card-2");
            
            var container = document.createElement("section");
            container.setAttribute("style", "display:flex; flex-direction:column; justify-content: space-around; align-items:center; margin-top: 25px; font-size: 48px; border:solid; border-radius: 12px; height:300px; width:400px; background-color:rgb(179, 231, 149);");
            highScoresEl.appendChild(container);
            container.textContent = "Enter Name:";

            var enterInitials = document.createElement("textarea");
            enterInitials.setAttribute("style", "height:40px; width:150px; text-align: center; font-size:25px;");
            container.appendChild(enterInitials);

            var submitButton = document.createElement("button");
            submitButton.setAttribute("style", "height: 25px; width: 55px; border-radius:12px;");
            container.appendChild(submitButton);
            submitButton.textContent = "Submit";

            // enterInitials.addEventListener("keydown", function(event) {
            //     var key = event.key.toLowerCase();
            // })

            submitButton.addEventListener("click", function(event) {
                event.preventDefault();
                // renderLi();
                // Put scores in local storage.
                var scores = {
                    scoreList: enterInitials.value.trim(),
                };
            
                localStorage.setItem("score list", JSON.stringify(scores));

                // Generate css items.
                var leaderBoard = document.getElementById("card-3");

                var container2 = document.createElement("section");
                container2.setAttribute("style", "display:flex; flex-direction:column; justify-content: space-between; align-items:center; margin-top: 25px; padding:20px; font-size: 48px; border:solid; border-radius: 12px; height:600px; width:400px; background-color:rgb(179, 231, 149);");
                leaderBoard.appendChild(container2);
                container2.textContent = "Leaderboard";

                var containerArticle = document.createElement("article");
                containerArticle.setAttribute("style", )

                var playAgainButton = document.createElement("button");
                playAgainButton.setAttribute("style", "height: 45px; width: 55px; border-radius:12px; margin-bottom: 22px;");
                container2.appendChild(playAgainButton);
                playAgainButton.textContent = "Play again?";

                highScoresEl.setAttribute("style", "display:none;");

                // Log player values and render them to the leaderboard.
                // var scoreLi = [];

                // function renderLi() {
                //     for (var i = 0; i < scoreLi.length; i++)
                //     var items = scoreLi[i];

                //     var li = document.createElement("li");
                //     li.textContent = scores;
                //     li.setAttribute("data-index", i);

                //     leaderBoard.appendChild(li);
                // };

                // enterInitials.addEventListener("submit", function(event) {
                //     event.preventDefault();
                //     renderLi();

                //     var entry = entryInput.value.trim();

                //     scores.push(entry);
                // });

                // Play again.
                function refreshPage() {
                    window.location.reload();
                };

                playAgainButton.addEventListener("click", function(event) {
                    refreshPage();
                });

            });

            // var scores = [];

            // Stores the empty array above in local storage with the key of "scores"
            // function storeInitials() {
            //     localStorage.setItem("scores", JSON.stringify(scores));
            //     var allscores = JSON.parse(localStorage.getItem("scores"));
            // };

            // function individualScores() {
            //     var playerScores = {
            //         enterInitials: "",
            //     };
            // };

            // submitButton.addEventListener("click", function (event) {
            //     // event.preventDefault();
            //     storeInitials();
            //     individualScores();
                
            //     var leaderBoard = document.getElementById("card-3");

            //     highScoresEl.setAttribute("style", "display:none;")
            // });
        };
    },
};

// Add an event listener to the start button. Calls function beginQuiz upon clicking.
startButton.addEventListener("click", objBegin.beginQuiz);