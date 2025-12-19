Build a Quiz Game
-------------------
You should create an array named questions.
The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
The category key should have the value of a string representing a question category.
The question key should have the value of a string representing a question.
The choices key should have the value of an array containing three strings, which are alternative answers to the question.
The answer key should have the value of a string, representing the correct answer to the question. Also, the value of answer should be included in the choices array.
You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
You should have a function named getResults that takes the question object as the first parameter and the computer's choice as the second parameter. The function should return The computer's choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.


const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "What is the capital of India?",
    choices: ["Mumbai", "New Delhi", "Chennai"],
    answer: "New Delhi"
  },
  {
    category: "Math",
    question: "What is 5 × 6?",
    choices: ["11", "30", "56"],
    answer: "30"
  },
  {
    category: "History",
    question: "Who was the first Prime Minister of India?",
    choices: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"],
    answer: "Jawaharlal Nehru"
  },
  {
    category: "Technology",
    question: "Which language runs in a web browser?",
    choices: ["Python", "Java", "JavaScript"],
    answer: "JavaScript"
  }
];


function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}
