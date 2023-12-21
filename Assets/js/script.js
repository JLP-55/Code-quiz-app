// Add a query selector to the html div with class="start-button"
var startButton = document.querySelector(".start-button");

// Gets the div with the id "#card"
var questionsContent = document.getElementById("card");

// this variable is used in the setInterval function.
var secondsLeft = questionArray.length * 15;

// Create the timerInterval in the global scope instead of in the begin quiz function
var timerInterval = ""

var questionsHeader = document.createElement("h3");
var questionsCard = document.createElement("section");
var question1 =  document.createElement("button");
var question2 =  document.createElement("button");
var question3 =  document.createElement("button");
var question4 =  document.createElement("button");
var paraEl = document.createElement("p");

// Begin at questionArray[0] from questions.js
var index = 0;


function beginQuiz() {
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
       paraEl.textContent = "";

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
       questionsHeader.appendChild(paraEl);

       questionsCard.addEventListener("click", nextQuestion);
   };
   
   function nextQuestion(event) {
       var userChoice = event.target.textContent;
       // Here you are targeting the questionsArray in the questions.js file.
       var answer = questionArray[index].answer;
       if (userChoice === answer) {
           paraEl.textContent = "Correct";
       } else {
           paraEl.textContent = "Wrong";
           secondsLeft = secondsLeft -10;
       };
       
       // If the index (of the questionsArray in questions.js) === 4 (the last item in that array).
       if (index === 4) {
           clearInterval(timerInterval);
           questionsCard.setAttribute("style", "display:none");
           setTimeout(highScores, 500);
           return;
       };
       // Index plus one moves to the next item in the questionsArray.
       index++;
       // Calls the function questions, but will delay by 1/2 a second due to the setTimeout.
       setTimeout(questions, 500);
   };

   function highScores() {
       // Removes previous elements from display.
       questionsContent.setAttribute("style", "display:none");
       startButton.setAttribute("style", "display:none");

       // Gets the div with id "card-2"
       var highScoresEl = document.getElementById("card-2");
       
       // Generate elements.
       var container = document.createElement("section");
       container.setAttribute("style", "display:flex; flex-direction:column; justify-content: space-around; align-items:center; margin-top: 25px; font-size: 48px; border:solid; border-radius: 12px; height:300px; width:400px; background-color:rgb(179, 231, 149);");
       highScoresEl.appendChild(container);
       container.textContent = "Enter Name:";

       var enterInitials = document.createElement("textarea");
       enterInitials.setAttribute("style", "height:40px; width:150px; text-align: center; font-size:25px;");
       container.appendChild(enterInitials);

       var sectionTwo = document.createElement("section");
       sectionTwo.setAttribute("style", "display:flex");
       container.appendChild(sectionTwo);

       var h3 = document.createElement("h3");
       h3.setAttribute("style", "font-size: 18px; margin: 0px 18px;")
       h3.textContent = "If you do not wish to log you values, hit return to go back to the start quiz screen.";
       container.appendChild(h3);

       var submitButton = document.createElement("button");
       submitButton.setAttribute("style", "height: 25px; width: 55px; border-radius:12px; margin: 0px 2px;");
       sectionTwo.appendChild(submitButton);
       submitButton.textContent = "Submit";

       var returnButton = document.createElement("button");
       returnButton.setAttribute("style", "height: 25px; width: 55px; border-radius:12px; margin: 0px 2px;");
       sectionTwo.appendChild(returnButton);
       returnButton.textContent = "Return";

       returnButton.addEventListener("click", function() {
        window.location.reload();
       });

       submitButton.addEventListener("click", function() {
        // This if statement will stop the code early if the value of the textarea,
        // enterInitials is an empty string, in other words, blank.
        var userInput = enterInitials.value;
        if (userInput === "") {
         return;
        };
    
           // Gets the div with id "card-3"
           var leaderBoard = document.getElementById("card-3");
           
           // Generate elements.
           var container2 = document.createElement("section");
           container2.setAttribute("style", "display:flex; flex-direction:column; justify-content: space-between; align-items:center; margin-top: 25px; padding:20px; font-size: 48px; border:solid; border-radius: 12px; height:600px; width:400px; background-color:rgb(179, 231, 149);");
           leaderBoard.appendChild(container2);
           container2.textContent = "Player Scores:";

           var leaderBoardItems = document.createElement("section");
           leaderBoardItems.setAttribute("style", "display:flex; flex-direction:column; align-items:center; line-height:30px; height:500px; width:420px; font-size:25px;");
           container2.appendChild(leaderBoardItems);

           var playAgainButton = document.createElement("button");
           playAgainButton.setAttribute("style", "height: 45px; width: 55px; border-radius:12px; margin-bottom: 22px;");
           container2.appendChild(playAgainButton);
           playAgainButton.textContent = "Play again?";

           highScoresEl.setAttribute("style", "display:none;");

           // Create the variable playerTime with the intention, 
           // of adding it to the current value that will be logged in,
           // scoresArray.
           var playerTime = secondsLeft;

           // Give the variable userInput a new value of it's current value,
           // + the variable playerTime.
           userInput = userInput.trim() + ": " + playerTime;

           // We will store all player values in this array.                
           var scoresArray = [];

           // .push the userInput.value to the scoresArray.
           scoresArray.push(userInput);
           
           // JSON.parse to .getItem with the key of "score-list" from local storage,
           // and set this value to the variable storedScores.
           var storedScores = JSON.parse(localStorage.getItem("score-list"));

           // After JSON.parse in line above if storedScores are equal to null,
           // then the code will bypass the else if statement as the value of,
           // storedScores.length cannot be read.

           // Else if the length of the var storedScores is greated than 0,
           // add the value in scoresArray to the end of the storedScores array,
           // then call the function storeLocal to put newly added values back into local storage.
           if (storedScores === null || storedScores === undefined) {

           } else if (storedScores.length > 0) {
            scoresArray = scoresArray.concat(storedScores);
            storeLocal();
           }; 
           
           function init() {                
            // This if statement will only run if there are no values logged to,
            // storedScores, so, only for the very first player entry.
               if (storedScores === null) {
                storeLocal();
               };

               // if storedScores is strictly equal to !null, 
               // then give the scoresArray the value of the variable storedScores.
               if (storedScores === !null) {
                   scoresArray = storedScores;
               };

               renderPlayerValues();
           };
           
          function storeLocal() {
            // Target the item in local storage with the key of "score-list"
            // the value of scoresArray has been updated to include the lates input from the played.
              localStorage.setItem("score-list", JSON.stringify(scoresArray));
            };
   
           function renderPlayerValues() {

               for (var i = 0; i < scoresArray.length; i++) {
                   var playerName = scoresArray[i];

                   var paraEl2 = document.createElement("p");
                   paraEl2.textContent = playerName;
                   leaderBoardItems.appendChild(paraEl2);
               };
           };

           // Play again.
           function refreshPage() {
               window.location.reload();
           };

           playAgainButton.addEventListener("click", refreshPage);

           init();
       });
   };
}

// Add an event listener to the start button. Calls function beginQuiz upon clicking.
startButton.addEventListener("click", beginQuiz);

// to do
// - try adding sound effects to the correct and wrong answers.
// - add a clear highscores button.