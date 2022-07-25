
let questions = [
    {
      id: 1,
      question: "In C++, a function contained within a class is calledWhich is private member functions access scope?",
      answer: "a methodMember functions which can only be used within the class",
      options: [
        "a methodMember functions which can only be used within the class",
        "Member functions which can used outside the class",
        "Member functions which are accessible in derived class",
        "Member functions which can’t be accessed inside the class"
      ]
    },
    {
      id: 2,
      question: "The && and || operators compare Which among the following is true? ",
      answer: "boolean value",
      options: [
        "The private members can’t be accessed by public members of the class",
        "The private members can be accessed by public members of the class",
        "The private members can be accessed only by the private members of the class",
        "The private members can’t be accessed by the protected members of the class"
      ]
    },
    {
      id: 3,
      question: "Which member can never be accessed by inherited classes?",
      answer: "Private member function",
      options: [
        "Private member function",
        "Public member function",
        "Protected member function",
        "All can be accessed"
        ]
    },
    {
        id: 4,
        question:"Which syntax among the following shows that a member is private in a class?",
        answer: "private functionName(parameters)",
        options: [
        " private: functionName(parameters)",
        "private(functionName(parameters))",
        "private functionName(parameters)",
        "private::functionName(parameters)"
        ]
  },
    {
        id: 5,
        question: "If private member functions are to be declared in C++ then _____________",
        answer: "private: <all private members>",
        options: [
            "private: <all private members>",
            "private <member name>",
            "private(private member list)",
            "private :- <private members>"
  ]
},
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
