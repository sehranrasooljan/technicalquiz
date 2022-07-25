
let questions = [
    {
      id: 1,
      question: "Java is ?",
      answer: "all of these",
      options: [
        "is most suitable for Internet programming ",
        "a really simple, reliable, portable and powerful language  ",
        "non an acronym ",
        "all of these "
      ]
    },
    {
      id: 2,
      question: "Which one of the following is a logical operator ",
      answer: "all Of These",
      options: [
        " &&",
        "!",
        "||",
        "all Of These"
      ]
    
    },
    {
        id: 3,
        question: "The method which belongs to the string class is/are  ",
        answer: "Length ( )",
        options: [
          " Compare to ( ) ",
          "Length ( )",
          "Substring ( ) ",
          "Equals ( ) "
        ]
      
      },
      {
        id: 4,
        question: "Which one of the following is a logical For a 32-bit integer value, keyword used is  ",
        answer: "all Of These",
        options: [
          "Boolean ",
          "Int ",
          "short ",
          "Long"
        ] 
      
      },
    {
      id: 5,
      question: "A web page is  ",
      answer: "All of these",
      options: [
        "Made up of text and HTML tags ",
        "Marked by an opening HTML tag <HTML>",
        "Marked by a closing HTML tag </HTML>  ",
        "All of these "
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
