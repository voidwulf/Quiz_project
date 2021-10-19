/* Ferch questions from json file */
//const questions = fetch("assets/data/questions.json").then(res => res.json()) - reserved till I learn how to better manipulate json
/*questions and images */
const questions = [
    {
        question: "In 18th century infantry plate armour became obsolete because:",
        image: '<img  class= "quiz-image" src="assets/images/armour.jpg" alt="armour">',
        correct: "High cost and low effectiveness against fire arms",
        awnsers: ["High cost and low effectiveness against fire arms", "Emergence of kevlars", "Slow logistical army speed", "Increased naval combat"]
    },
    {
        question: " In about 1439, Johannes Gutenberg adapted what mechanism to create the first printing press:",
        image: '<img  class= "quiz-image" src="assets/images/printing_press.png" alt="printing_press">',
        correct: "Wine press",
        awnsers: ["Wine press", "Stone crusher","Windmill","Lift mechanism"]
    },
    {
        question: "Venice, the floating city is built on foundations made out of:",
        image: '<img  class= "quiz-image" src="assets/images/venice.jpg" alt="venice">',
        correct: "Wood",
        awnsers: ["Metal", "Wood", "Stone","Obsidian"]
    },
    {
        question: "What was no illegal during the Prohibition Era:",
        image: '<img  class= "quiz-image" src="assets/images/barrel.jpg" alt="barre">',
        correct: "Drinking alcohol",
        awnsers: ["Drinking alcohol", "Producing alcohol", "Selling alcohol ","Murder"]
    },{
        question: "The last title Julius Caesar held before his assassination was:",
        image: '<img  class= "quiz-image" src="assets/images/senat_floor.png" alt="senat_floor">',
        correct: "Dictator for life",
        awnsers: ["Dictator for life","Emperor of Rome","Despot of Rome","First Consul"]
    },
    {
        question: "Columbus, during his voyage to reach India, discovered the new world by landing on:",
        image: '<img  class= "quiz-image" src="assets/images/columbus.png" alt="columbus">',
        correct: "Bahamas",
        awnsers: ["Cuba","Bahamas","Shores of Columbia","Coast of Mexico"]
    },
    {
        question: "In 18th The longest and largest overland trade route in history was renewed for the major trade of: infantry plate armour became obsolete because:",
        image:'<img  class= "quiz-image" src="assets/images/caravan.png" alt="caravan">',
        correct: "Silk",
        awnsers: ["Silk", "Pepper", "Diamonds", "Tea"]
    },
    {
        question: "Ancient Egyptians after long day of work loved to:",
        image: '<img  class= "quiz-image" src="assets/images/egyptian.jpg" alt="egyptian">',
        correct: "Play board games",
        awnsers: ["Wrestle", "Go to theatre", "Play catch", "Play board games"]
    },
    {
        question: "Bastion fort revolutionized defensive warfare by:",
        image: '<img  class= "quiz-image" src="assets/images/cannon.jpg" alt="cannon">',
        correct: "Maximized defensiveness against cannonball impacts,offered better protection and better views of the battlefield",
        awnsers: ["Maximized firepower of cannons and infantry", 
            "Maximized defensiveness against cannonball impacts,offered better protection and better views of the battlefield",
             "Strong cannon firepower and effective supply lines", "Strong defense and low cost to build"]
    },
    {
        question: "The earliest records of brewing coffee span from 15th century in::",
        image: '<img  class= "quiz-image" src="assets/images/coffee.jpg" alt="coffee">',
        correct: "Yemen",
        awnsers: ["Cuba", "Florida", "Yemen", "Spain"]
    }
    ]

/* Variables */
let question= document.getElementById('question')
const submitButton = document.getElementById('submit');
//let suffledQuestions, currentQuestionIndex
let currentQuestion = {}
let i= 0; /* number of awensered question*/
let score = 0; /* number of current correct awensered questions */
let next= document.querySelector('.awnser');
let points= document.getElementById('score');
let quizImage= document.getElementById("quizImage")
let a1= document.getElementById('a1');
let a2= document.getElementById('a2');
let a3= document.getElementById('a3');
let a4= document.getElementById('a4');
let correctAwnser = document.getElementById('orrectAwnser')

/*Event listener for selecting awensers*/
document.addEventListener('click', e =>{
    if (e.target.matches('.awnser')){
        calcScore(e)
        nextQuestion()

    }
})

  /*Function that hides intro page and shows Quzi HTML structure */
function hideIntro (){
    console.log('Quiz started')
    let intro = document.getElementById("intro")
    intro.classList.add('hidden') 
    //createHTML(questions)
    let quizArea= document.getElementById("quizArea")
    quizArea.classList.remove('hidden')
    displayQuestion()
}


  //function to display questions - ispired by https://github.com/Ahmad528/quizApp
function displayQuestion(){
    question.innerHTML= 'Question:'+(i+1)+': '+questions[i].question;
    quizImage.innerHTML= questions[i].image;
    a1.innerHTML= questions[i].awnsers[0];
    a2.innerHTML= questions[i].awnsers[1];
    a3.innerHTML= questions[i].awnsers[2];
    a4.innerHTML= questions[i].awnsers[3];
    //correctAwnser.innerHTML= questions[i].correct;
}

//function to calculate scores - ispired by https://github.com/Ahmad528/quizApp
function calcScore(e){
    console.log(e)
    if(e.srcElement.innerText===questions[i].correct) //Tnx my mentor for helping me locate the lcoation of the desired atribure in the element
    {
        console.log('Awnser is correct!');
        alert('Awnser is correct!');
        score= score+1;
    }
    else{
        console.log('Awnser is wrong!');
        alert('Awnser is wrong!');;
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
        console.log('Quiz has ended')
        //hide question area
        quizArea.classList.add('hidden')
        //reveale score area
        let end = document.getElementById("scoreArea")
        end.classList.remove('hidden');
        points.innerHTML= score +'/10'; /*display score after the last question */

    }
}

