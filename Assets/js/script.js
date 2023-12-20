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

       submitButton.addEventListener("click", function() {
           
           // We will store all player values in an array.                
           var scoresArray = [];
           var storedScores = JSON.parse(localStorage.getItem("score-list"));

           if (storedScores === null || storedScores === undefined) {
            renderPlayerValues();
           } else if (storedScores.length > 0) {
            scoresArray = scoresArray.concat(storedScores);
            storeLocal();
           };
        //    if (storedScores.length > 0) {
        //        scoresArray = scoresArray.concat(storedScores);
        //    };
           
           
           
           function init() {
               // Create a variable and JSON.parse to getItem from localStorage, and look got the key "score-list"
               var store = JSON.parse(localStorage.getItem("score-list"));
                
               if (store === null) {
                storeLocal();
                // return;
               };

               if (store === !null) {
                   // if store is strictly equal to !null, then give the scores array the value of the variable store.
                   scoresArray = store;
               };

               renderPlayerValues();
               storeLocal();
           };
           
          // Store player values in local storage.
          function storeLocal() {
              localStorage.setItem("score-list", JSON.stringify(scoresArray));
            if (storedScores === !null) {
                renderPlayerValues();
            };
                // if (storedScores.length > 0) {
                //     scoresArray = scoresArray.concat(storedScores);
                // };
            };
            
            // !!!Need to re-save the new values to local storage!!!
            // .push values from enterInitials to the end of scoresArray[];
            scoresArray.push(enterInitials.value.trim()); 

           // Generate elements.
           var leaderBoard = document.getElementById("card-3");

           var container2 = document.createElement("section");
           container2.setAttribute("style", "display:flex; flex-direction:column; justify-content: space-between; align-items:center; margin-top: 25px; padding:20px; font-size: 48px; border:solid; border-radius: 12px; height:600px; width:400px; background-color:rgb(179, 231, 149);");
           leaderBoard.appendChild(container2);
           container2.textContent = "Leaderboard";

           var leaderBoardItems = document.createElement("article");
           leaderBoardItems.setAttribute("style", "display:flex; flex-direction:column; height:500px; width:420px; font-size:25px;");
           container2.appendChild(leaderBoardItems);
           // leaderBoardItems.textContent = scoresArray;

           var playAgainButton = document.createElement("button");
           playAgainButton.setAttribute("style", "height: 45px; width: 55px; border-radius:12px; margin-bottom: 22px;");
           container2.appendChild(playAgainButton);
           playAgainButton.textContent = "Play again?";

           highScoresEl.setAttribute("style", "display:none;");

           function renderPlayerValues() {
            //    leaderBoardItems.innerHTML ="";

               for (var i = 0; i < scoresArray.length; i++) {
                   var playerName = scoresArray[i];

                   var li = document.createElement("li");
                   li.textContent = playerName;
                   leaderBoardItems.appendChild(li);
               };
           };

           // Play again.
           function refreshPage() {
               window.location.reload();
           };

           playAgainButton.addEventListener("click", refreshPage);

           // Call local storage functions to help display player values.
           // storeLocal();
           // renderPlayerValues();
           init();
       });
   };
}

// Add an event listener to the start button. Calls function beginQuiz upon clicking.
startButton.addEventListener("click", beginQuiz);

// to do
// - log newly generated player values in the scores Array
// - get seconds left value to rank high score values. 