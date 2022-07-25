// const quizDB = [
//     {
//         question: "Q1:Operating systems",
//         a: "enables the programmer to draw a flow chart",
//         b: "provides a layer, user friendly interface",
//         c: "links a program with subroutine it references",
//         d: "all of these",
//         ans: "ans2"
//     },
//     {
//         question: "Q2:Which of the following Is not a part of the operating system?",
//         a: "Input/output control program",
//         b: "Job control program",
//         c: "Supervisor",
//         d: "Performance monitor",
//         ans: "ans4"
//     },
//     {
//         question: "Q3:Operating system is a collection of",
//         a: "Software routines",
//         b: "Input-output devices",
//         c: "Hardware components",
//         d: "All of these",
//         ans: "ans1" 
//     },
//     {
//         question: "Q4:Which of the following is not an operating system?",
//         a: "UNIX",
//         b: "MS-DOS",
//         c: "CP/M",
//         d: "PASCAL",
//         ans: "ans4"
//     },
//       {
//         question: "Q5:FIFO scheduling is",
//         a: "Fair-share scheduling",
//         b: "Deadline scheduling",
//         c: "Non-preemptive scheduling",
//         d: "Preemptive scheduling",
//         ans: "ans3"
//     }
//     ];


// // const question = document.querySelector('.question');
// // const option1 = document.querySelector('#option1');
// // const option2 = document.querySelector('#option2');
// // const option3 = document.querySelector('#option3');
// // const option4 = document.querySelector('#option4');
// // const submit = document.querySelector('#submit');


// // let questionCount = 0;

// // const loadQuestion = () => {  
    
// //     const questionList = quizDB[questionCount];

// //    // console.log(quizDB[0]);
// //     question.innerHTML = quizDB[0].question;

// //     option1.innerHTML  = questionList.a;
    
// //     option2.innerHTML  = questionList.b;
    
// //     option3.innerHTML  = questionList.c;
    
// //     option4.innerHTML  = questionList.d;

// // }

// // loadQuestion();

let questions = [
    {
      id: 1,
      question: "What is the full form of RAM ?",
      answer: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "What is the full form of CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
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
  