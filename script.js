const quizDB = [
    {
      question: "Q1: what is the full form of HTML ?",
        a: "Hello to my land",
        b: "Hey text markup Language",
        c: "Hypertext makeup language",
        d: "Hypertext markup language",
        ans: "ans4"
    },
    {
      question: "Q2: Which one of these is a JavaScript package manager?",
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "Angular",
      ans: "ans3"
    },
    {
      question: "Q3: Which tool can you use to ensure code quality?",
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint",
        ans: "ans4"
    },
    {
        question: "Q4: what is the full form of css ?",
          a: "cascading style sheet",
          b: "cartoon style sheet",
          c: "cascading super sheet",
          d: "classic style sheet",
          ans: "ans1"
      }
  ];
  const question= document.querySelector('.question');
  const option1 = document.querySelector('#option1');
  const option2 = document.querySelector('#option2');
  const option3 = document.querySelector('#option3');
  const option4 = document.querySelector('#option4');
  const submit  = document.querySelector('#submit');
  const answers= document.querySelectorAll('.answer');
  const showscore= document.querySelector('#showscore');

  let questionCount=0;
  let score=0;

  const loadQuestion =()=>{

    const questionList=quizDB[questionCount];
    question.innerText= questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;

  }

  loadQuestion();

  const getCheckAnswer =()=>{
      let answer;
      answers.forEach((curAnsElem)=>{

      if(curAnsElem.checked){
          answer=curAnsElem.id;
      }
      
      });
      return answer;


  };

const deselectAll=()=>{

    answers.forEach((curAnsElem) => curAnsElem.checked= false );

}

  submit.addEventListener('click', ()=>{

    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer=== quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

if(questionCount < quizDB.length ){
    loadQuestion();
}else{
    showscore.innerHTML=`
    <h3> you scored ${score}/${quizDB.length}</h3>
    <button class= "btn" onclick= "location.reload()" > Play Again</button>
    `;
    showscore.classList.remove('scoreArea');
    
}

  });