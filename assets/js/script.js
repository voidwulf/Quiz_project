/* Ferch questions from json file */
const questions = fetch("assets/data/questions.json").then(res => res.json())

/* Variables */
let question= document.getElementById('question')
const submitButton = document.getElementById('submit');
//let suffledQuestions, currentQuestionIndex
let currentQuestion = {}
let i= 0; /* number of awensered question*/
let score = 0; /* number of current correct awensered questions */



/* Function that creates structure for quiz*/
function createHTML (){
    let quizSpace = document.getElementById("quizArea")
    quizSpace.innerHTML = `
    <p id="question"></p>
    <button class='awnserChoice' id="a1" onclick='submintAwnser()'></button>
    <button class='awnserChoice' id="a2" onclick='submintAwnser()'></button>
    <button class='awnserChoice' id="a3" onclick='submintAwnser()'></button>
    <button class='awnserChoice' id="a4" onclick='submintAwnser()'></button>
    <button  id="next"></button>
`;
}

awnser.addEventListener ("click", function(){
    buttonSelect();
  })
function buttonSelect() {
    for(var i = 0; i < optionText.length; i++){
      var option = document.createElement("button");
      option.innerHTML = optionText[i];
      document.body.appendChild(option);
    }
  }
  /*Function that hides intro page and shows Quzi HTML structure */
function hideIntro (){
    console.log('Quiz started')
    let intro = document.getElementById("intro")
    intro.classList.add('hidden') 
    createHTML(questions)
    
}


function submintAwnser(){
    if (awnser == correctAwnser){
        console.log('Awnser is correct!');
        alert('Awnser is correct!');
        let score = score +1;
    }
    else {
            console.log('Awnser is incorrect!');
            alert('Awnser is incorrect!');  
        }
        function  getNewQuestion(){
            if (awnQue<9 ) {
                /*Get new question */
        
                awnQue = awnQue + 1
        
            }
            else {
                /* show end screen */
                let quizSpace = document.getElementById("quizArea")
                quizSpace.innerHTML = `
                <h2>Congratolations!</h2>
                <img class="quiz-image" src="assets/images/napoleon.jpg" alt="napoleon">
                <p id="question">You scored / 10!</p>
                <button class="btn" onclick="hideIntro()"></button> `
            }
        }
    }
}



/*function displayQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('awnserChoice')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  } */

  //function to display questions
function displayQuestion(){
    for(let a=0;a<9;a++){
        span[a].style.background='none';
    }
    //question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    a1.innerHTML= questions[i].question[0];
    a2.innerHTML= questions[i].question[1];
    a3.innerHTML= questions[i].question[2];
    a4.innerHTML= questions[i].question[3];
    //stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questions[i].correctAwnser && score<questions.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    //setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<9)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

// *function to check Answers */
function checkAnswer(){
    let correctAwnser= document.getElementById('answerBank');
    let answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(let a=0;a<questionBank.length;a++)
    {
        let list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();

  /** 
function pullQuestions (qst){
    qst.forEach(question => {
        const questionHTML = document.createElement("div");
        const awnsers = question.availableAwnsers.forEach (q => {
            return `<button>{q}</button>`
        });
    })
    questionHTML.innerHTML = `
    <img src = "${question.image}">
    <button>awensers</button>
    `
    questionHTML.insertAdjecentElement('beforeend', awnsers)
    questionHTML.insertAdjecentElement('beforeend', awnsers)
    console.log(image)
}

function initatieQuiz() {

    suffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

    function setNextQuestion() {
        resetState()
        showQuestion(shuffledQuestions[currentQuestionIndex])
      };
      function showQuestion(question) {
          questionElement.innerText = question.question
          question.answers.forEach(answer => {
              const button = document.createElement('button')
              button.innerText = answer.text
              button.classList.add('btn')
              if (answer.correct) {
                  button.dataset.correct = answer.correct
                }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
}
**/