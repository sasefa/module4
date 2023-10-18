let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  const timeLimit = 60; // seconds

  // Function to start the quiz
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timer = timeLimit;
    displayQuestion();
    startTimer();
  }

  // Function to display a question
  function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "";

    if (currentQuestionIndex < quizQuestions.length) {
      const question = quizQuestions[currentQuestionIndex];
      const questionElement = document.createElement("h2");
      questionElement.textContent = question.question;
      questionContainer.appendChild(questionElement);

      const options = question.options;
      options.forEach(function (option) {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", function () {
          checkAnswer(option);
        });
        questionContainer.appendChild(button);
      });
    } else {
      endQuiz();
    }
  }

  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const question = quizQuestions[currentQuestionIndex];
    if (selectedOption === question.answer) {
      score++;
      timer += 10; // Add 10 seconds for correct answer
    } else {
      timer -= 10; // Subtract 10 seconds for incorrect answer
      if (timer < 0) {
        timer = 0;
      }
    }
    currentQuestionIndex++;
    displayQuestion();
  }

  // Function to start the timer
  function startTimer() {
    const timeElement = document.getElementById("time");
    timeElement.textContent = timer;

    const countdown = setInterval(function () {
      timer--;
      timeElement.textContent = timer;

      if (timer <= 0) {
        clearInterval(countdown);
        endQuiz();
      }
    }, 1000);
  }

  // Function to end the quiz
  function endQuiz() {
    clearInterval(timer);
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.style.display = "none";
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `<h2>Quiz Finished!</h2><p>Your Score: ${score}</p>`;
    const initialsInput = document.getElementById("initials");
    initialsInput.value = "";
    const saveScoreButton = document.getElementById("save-score");
    saveScoreButton.addEventListener("click", saveScore);
    const highScoresContainer = document.getElementById("high-scores-container");
    highScoresContainer.style.display = "block";
    showHighScores();  
  }

  // Function to save the score
  function saveScore() {
    const initials = document.getElementById("initials").value;
    const highScoresList = document.getElementById("high-scores");
    const scoreItem = document.createElement("li");
    scoreItem.textContent = `${initials}: ${score}`;
    highScoresList.appendChild(scoreItem);
    const highScoresContainer = document.getElementById("high-scores-container");
    highScoresContainer.style.display = "none";
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.style.display = "block";
  }

  // Function to show the high scores
  function showHighScores() {
    const highScoresContainer = document.getElementById("high-scores-container");
    const highScoresList = document.getElementById("high-scores");
  
    // Clear the existing high scores list
    highScoresList.innerHTML = "";
  
    // Retrieve high scores from local storage or use an empty array if not found
    const savedScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
    // Display each high score as a list item
    savedScores.forEach(function (scoreObj) {
      const scoreItem = document.createElement("li");
      scoreItem.textContent = `${scoreObj.initials}: ${scoreObj.score}`;
      highScoresList.appendChild(scoreItem);
    });
  
    highScoresContainer.style.display = "block";  
  }

  // Event listener for the start button
  const startButton = document.createElement("button");
  startButton.textContent = "Start Quiz";
  startButton.addEventListener("click", startQuiz);
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.appendChild(startButton);

  // Event listener for the view high scores button
  const viewScoresButton = document.getElementById("view-quiz");
  viewScoresButton.addEventListener("click", showHighScores);

  function showHighScores() {
    const highScoresContainer = document.getElementById("high-scores-container");
    const highScoresList = document.getElementById("high-scores");
  
    // Clear the existing high scores list
    highScoresList.innerHTML = "";
  
    // Retrieve high scores from local storage or use an empty array if not found
    const savedScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
    // Display each high score as a list item
    savedScores.forEach(function (scoreObj) {
      const scoreItem = document.createElement("li");
      scoreItem.textContent = `${scoreObj.initials}: ${scoreObj.score}`;
      highScoresList.appendChild(scoreItem);
    });
  
    highScoresContainer.style.display = "block";
  
    // Add event listener to the "Back to Quiz" button
    const viewQuizButton = document.getElementById("view-quiz");
    viewQuizButton.addEventListener("click", function () {
      highScoresContainer.style.display = "none";
      const quizContainer = document.getElementById("quiz-container");
      quizContainer.style.display = "block";
    });
  }

  const questionsArr = [
    {
      title: `What Does HTML Stand For?`,
      choices: [
        `Humperdink To Marry LadyButtercup`,
        `Hypocrites Try My Lobstertails`,
        `Hypertext Markup Language`,
        `How To Make Linguini`,
      ],
      answer: `3`,
    },
    {
      title: `What Does CSS Stand For?`,
      choices: [
        `Cascading Style Sneeze`,
        `Cascading Style Sheets`,
        `Coffee Should Stay`,
        `Cars Should Stop`,
      ],
      answer: `2`,
    },
    {
      title: `What Does JS Stand For?`,
      choices: [
        `CoffeeWriting`,
        `Jam and Vanilla and Sugar Can Rip IntraPulmonary Tracts`,
        `EspressoPrint`,
        `JavaScript`,
      ],
      answer: `4`,
    },
    {
      title: `What is a For Loop?`,
      choices: [
        `A way to iterate over code a certain amount of times in JavaScript`,
        `A racetrack in France`,
        `A bracelet that is given as a gift`,
        `A CSS property that randomizes the styling of the application`,
      ],
      answer: `1`,
    },
    {
      title: `Which is a For Loop?`,
      choices: [
        `for (let i = 0; i < iterations; i++){code here}`,
        `for (let i = 0; i > iterations; i++){code here}`,
        `for (let i = 0; i > iterations; i--){code here}`,
        `A racetrack in France`,
      ],
      answer: `1`,
    },
    {
      title: `What is a Class in HTML?`,
      choices: [
        `An attribute used to reference single elements in CSS and JavaScript`,
        `A group of students in a school`,
        `An attribute used to reference multiple elements in CSS and JavaScript`,
        `A group of elements that share the same economic or social status`,
      ],
      answer: `3`,
    },
    {
      title: `What is an ID in HTML?`,
      choices: [
        `An attribute used to reference single elements in CSS and JavaScript`,
        `An attribute used to reference multiple elements in CSS and JavaScript`,
        `A card that a person uses to identify themselves`,
        `A racetrack in France`,
      ],
      answer: `1`,
    },
    {
      title: `What is the Selector Used to Reference IDs in CSS`,
      choices: [`.`, `#`, `*`, `$`],
      answer: `2`,
    },
    {
      title: `What is the Selector Used to Reference Classes in CSS`,
      choices: [`#`, `*`, `.`, `$`],
      answer: `3`,
    },
    {
      title: `Where is a Style Sheet Linked?`,
      choices: [
        `In JavaScript`,
        `At the bottom of the body in HTML`,
        `In the header in HTML`,
        `In the head in HTML`,
      ],
      answer: `4`,
    },
  ];

