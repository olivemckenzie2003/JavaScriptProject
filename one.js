
//Array of objects
const quizInfo = [
    {
      question: "What is the highest mountain in the world?",
      options: ["Mount Everest", "Mount Kangchenjunga", "Mount Makalu", "Mount Nanga Parbat"],
      answer: "Mount Everest"
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon River", "Mississippi River", "River Nile", "Yangtze River"],
      answer: "River Nile"
    },
    {
      question: "What is the name of smallest country in the world?",
      options: ["Tuvalu", "Monaco", "Nauru", "Vatican City"],
      answer: "Vatican City"
    },

    {
      question: "Which tree grows the tallest in the world?",
      options: ["Menara", "Hyperion", "Centurion", "Pando"],
      answer: "Centurion"
    },
    
  ];
  
  //Access all elements in the array using 
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizInfo[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizInfo[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      ++score;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizInfo.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your score: ${score}/${quizInfo.length}</p>
    `;
  }
  
  showQuestion();
 