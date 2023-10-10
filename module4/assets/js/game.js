window.addEventListener("load", function() {
  // Your code here


// Use strict mode to catch certain types of errors
"use strict";

// Wait for the window to load before accessing elements
window.addEventListener("load", function() {

  // Access elements from the DOM once the window has loaded
  const game = document.getElementById("game");
  const questionEl = document.getElementById("question");
  const optionButtonsEl = document.getElementById("option-buttons");
  const startButtonEl = document.getElementById("start-btn");
  const nextButtonEl = document.getElementById("next-btn");

  let shuffledQuestions, currentQuestionIndex;

  // Add click event listener for start button
  startButtonEl.addEventListener("click", startGame);
  // Add click event listener for next button
  nextButtonEl.addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion();
  });

  function startGame() {
    // Hide the start button and show the game element
    startButtonEl.classList.add("hide");
    game.classList.remove("hide");
    // Shuffle the questions array
    shuffledQuestions = questionsArr.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    showQuestion();
  }

  function showQuestion() {
    // Clear any previous answer buttons
    resetState();
    // Display the current question
    const question = shuffledQuestions[currentQuestionIndex];
    questionEl.innerText = question.title;
    // Display answer buttons for each possible answer
    question.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.innerText = choice;
      button.classList.add("btn");
      if (index === parseInt(question.answer) - 1) {
        button.dataset.correct = true;
      }
      button.addEventListener("click", selectAnswer);
      optionButtonsEl.appendChild(button);
    });
  }

  function resetState() {
    // Clear any answer buttons and reset classes and data attributes
    while (optionButtonsEl.firstChild) {
      optionButtonsEl.removeChild(optionButtonsEl.firstChild);
    }
    nextButtonEl.classList.add("hide");
    Array.from(optionButtonsEl.children).forEach((button) => {
      button.disabled = false;
      button.classList.remove("correct");
      button.classList.remove("incorrect");
      delete button.dataset.correct;
    });
  }

  function selectAnswer(event) {
    // Disable all answer buttons and add appropriate styles
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    Array.from(optionButtonsEl.children).forEach((button) => {
      button.disabled = true;
      if (button.dataset.correct) {
        button.classList.add("correct");
      } else {
        button.classList.add("incorrect");
      }
    });
    // Show the next button if there are more questions
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButtonEl.classList.remove("hide");
    } else {
      startButtonEl.innerText = "Restart";
      startButtonEl.classList.remove("hide");
    }
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
});

});