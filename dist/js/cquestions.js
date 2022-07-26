
let questions = [
    {
      id: 1,
      question: "In C++, a function contained within a class is called",
      answer: "member function",
      options: [
        "a method",
        "a class function",
        "member function",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "The && and || operators compare two ",
      answer: "boolean value",
      options: [
        " boolean values",
        "boolean value",
        "numeric values",
        "numeric value"
      ]
    },
    {
      id: 3,
      question: "A pointer is",
      answer: "a variable for sorting address",
      options: [
        "address of a variable",
        "a variable for sorting address",
        "data type of an address variable",
        "indication of the variable to be accessed next"
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
  