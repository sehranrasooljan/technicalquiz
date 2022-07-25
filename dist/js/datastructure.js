
let questions = [
    {
      id: 1,
      question: "A data structure in which linear sequence is maintained by pointers is known as",
      answer: "Linked list",
      options: [
        "Array",
        "Stack",
        "Linked list",
        "Pointer-based data structure"
      ]
    },
    {
      id: 2,
      question: "Which of the following data structure works on the principle of First Come First Serve?",
      answer: "Queue",
      options: [
        "Priority queue ",
        " Heap ",
        "Stack",
        "Queue"
      ]
    },
    {
      id: 3,
      question: "A  ____ is a linear collection of self-referential structures, called nodes, connected by pointer links.  ",
      answer: "Linked List",
      options: [
        "Queue",
        "Linked List",
        "Tree",
        "Stack"
        ]
    },

    {
        id: 4,
        question:"A queue where all elements have equal priority is a  ",
        answer: "FIFO data structure ",
        options: [
        " ILFO data structure ",
        " LILO data structure ",
        "FIFO data structure",
        "LIFO data structure"
        ]
  },
    {
        id: 5,
        question: "A file that is only read by a program is known as ____  ",
        answer: "Input file ",
        options: [
            "Input file  ",
            "Temporary file  ",
            "Work file  ",
            "Input/output file  "
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
