
let questions = [
    {
        
      id: 1,
      question: "The reason for the implementation of the cache memory is ________ ",
      answer: "The difference in speeds of operation of the processor and memory  ",
      options: [
        "To increase the internal memory of the system ",
        "The difference in speeds of operation of the processor and memory  ",
        "To reduce the memory access and cycle time ",
        "All of the mentioned "
      ]
    },
    {
      id: 2,
      
      question: " The effectiveness of the cache memory is based on the property of ________ ",
      answer: "Locality of reference",
      options: [
        
        "Locality of reference",
        "Memory localisation",
        "Memory Size",
        "None of the mentioned"
      ]
    
    },
    {
        id: 3,
        question: "The ______ format is usually used to store data ",
        answer: "BCD",
        options: [
          "  BCD ",
          " Decimal",
          "Hexadecimal",
          "Octal"
        ]
      
      },
      {
        id: 4,
        question: "The small extremely fast, RAM’s are called as _______ ",
        answer: "Cache        ",
        options: [
          "Cache",
          "Heaps",
          "Accumulators",
          "Stacks"
        ]
      
      },
      {
        id: 5,
        question: " The 8-bit encoding format used to store data in a computer is ______ ",
        answer: "EBCDIC",
        options: [
          "ASCII",
          "EBCDIC",
          "ANCI ",
          "USCII "
        ] 
      
      },
      {
        id: 6,
        question: " The control unit controls other units by generating ___________",
        answer: "EBCDIC",
        options: [
          "Control signals",
          "Timing signals",
          "Transfer signals",
          "Timing signals "
        ] 
      
      },
      {
        id: 7,
        question: "The main virtue for using single Bus structure is ____________",
        answer: "Cost effective connectivity and ease of attaching peripheral devices ",
        options: [
          "Fast data transfers",
          "Cost effective connectivity and speed",
          "Cost effective connectivity and ease of attaching peripheral devices ",
          "None of the mentioned "
        ] 
      
      },

      {
        id:8 ,
        question: "To extend the connectivity of the processor bus we use ________ ",
        answer: "PCI bus ",
        options: [  
            
          "PCI bus",
          "SCSI bus ",
          "Controllers",
          "Multiple bus "
        ] 
      
      },
      {
        id: 9,
        question: "The bus used to connect the monitor to the CPU is ______",
        answer: "SCSI bus ",
        options: [
          "PCI bus",
          "SCSI bus",
          "Memory bus",
          "Rambus "
        ] 
      
      },
      {

      id: 10,
      question: "Which memory device is generally made of semiconductors?  ",
      answer: "RAM",
      options: [
        "RAM ",
        "Hard-disk",
        "Floppy disk ",
        "Cd disk"
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
