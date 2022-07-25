
let questions = [
    {
      id: 1,
      question: "Which of the following is the use of id() function in python?",
      answer: "Id returns the identity of the object",
      options: [
        "Every object doesn’t have a unique id",
        "Id returns the identity of the object ",
        "All of the mentioned",
        "None of the mentioned"
      ]
    },
    {
      id: 2,
      question: "All keywords in Python are in ",
      answer: "None of the mentioned",
      options: [
        "UPPER CASE",
        "lower case",
        "Capitalized",
        "None of the mentioned"
      ]
    
    },
    {
        id: 3,
        question: "Which one of the following has the highest precedence in the expression?",
        answer: "Parentheses",
        options: [
        "Addition",
        "Multiplication",
        "Exponential",
        "Parentheses"
        ]
      
      },
      {
        id: 4,
        question: "What is the return type of function id?",
        answer: "Int",
        options: [
          "float",
          "bool",
          "dict",
          "int"
        ] 
      
      },
    {
      id: 5,
      question: "Which statement is correct....??",
      answer: "List is mutable & Tuple is immutable",
      options: [
        "List is mutable & Tuple is immutable",
        "List is immutable & Tuple is mutable",
        "Both are Mutable",
        "Both are Immutable"
        ]
    }
  ];
 
let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
