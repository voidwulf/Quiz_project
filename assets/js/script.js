/*questions and images */
const questions = [
    {
        /*information acquired thanks to: https://en.wikipedia.org/wiki/Plate_armour and https://www.quora.com/When-did-metal-armor-become-obsolete-in-warfare */
        question: "In the 18th century, infantry plate armor became obsolete because:",
        image: '<img  class= "quiz-image" src="assets/images/armour.jpg" alt="armor">',
        correct: "High cost and low effectiveness against firearms",
        answers: ["High cost and low effectiveness against firearms", "Emergence of kevlar", "Slow logistical army speed", "Increased naval combat"]
    },
    {
        /*information acquired thanks to: https://www.folger.edu/cool-printing-facts */
        question: "In about 1439, Johannes Gutenberg adapted what mechanism to create the first printing press:",
        image: '<img  class= "quiz-image" src="assets/images/printing_press.png" alt="printing_press">',
        correct: "Wine press",
        answers: ["Windmill", "Stone crusher","Wine press","Lift mechanism"]
    },
    {
        /*information acquired thanks to: https://www.thelocal.it/20210325/16-surprising-facts-about-venice-to-mark-16-centuries-of-the-lagoon-city/ */
        question: "Venice, the floating city, is built on foundations made out of:",
        image: '<img  class= "quiz-image" src="assets/images/venice.jpg" alt="venice">',
        correct: "Wood",
        answers: ["Metal", "Wood", "Stone","Obsidian"]
    },
    {
        /*information acquired thanks to: https://www.history.com/news/10-things-you-should-know-about-prohibition */
        question: "What was no illegal during the Prohibition Era:",
        image: '<img  class= "quiz-image" src="assets/images/barrel.jpg" alt="barre">',
        correct: "Drinking alcohol",
        answers: ["Murder", "Drinking alcohol", "Producing alcohol", "Selling alcohol "]
    },{
        /*information acquired thanks to: https://en.wikipedia.org/wiki/Julius_Caesar */
        question: "The last title Julius Caesar held before his assassination was:",
        image: '<img  class= "quiz-image" src="assets/images/senat_floor.png" alt="senat_floor">',
        correct: "Dictator for life",
        answers: ["Dictator for life","Emperor of Rome","Despot of Rome","First Consul"]
    },
    {
        /*information acquired thanks to: https://www.nationalgeographic.org/thisday/oct12/columbus-makes-landfall-caribbean/#:~:text=Background%20Info%20Vocabulary-,On%20October%2012%2C%201492%2C%20Italian%20explorer%20Christopher%20Columbus%20made%20landfall,Columbus%20renamed%20it%20San%20Salvador */
        question: "Columbus, during his voyage to India, discovered the new world by landing on:",
        image: '<img  class= "quiz-image" src="assets/images/columbus.png" alt="columbus">',
        correct: "Bahamas",
        answers: ["Cuba","Bahamas","Shores of Columbia","Coast of Mexico"]
    },
    {
        /*information acquired thanks to: https://www.ducksters.com/history/china/silk_road.php */
        question: "In the 18th, the longest and largest overland trade route in history was renewed for and named after:",
        image:'<img  class= "quiz-image" src="assets/images/caravan.png" alt="caravan">',
        correct: "Silk",
        answers: ["Silk", "Pepper", "Diamonds", "Tea"]
    },
    {
        /*information acquired thanks to: https://www.history.com/news/11-things-you-may-not-know-about-ancient-egypt */
        question: "Ancient Egyptians, after a long day of work, loved to:",
        image: '<img  class= "quiz-image" src="assets/images/egyptian.jpg" alt="egyptian">',
        correct: "Play board games",
        answers: ["Wrestle", "Go to theatre", "Play catch", "Play board games"]
    },
    {
        /*information acquired thanks to: https://www.architecturaldigest.com/gallery/aerial-views-that-prove-why-star-forts-are-so-beautiful */
        question: "Bastion fort revolutionized defensive warfare by:",
        image: '<img  class= "quiz-image" src="assets/images/cannon.jpg" alt="cannon">',
        correct: "Maximized defensiveness against cannonball impacts, offered better protection and better views of the battlefield",
        answers: ["Maximized firepower of cannons and infantry", 
            "Maximized defensiveness against cannonball impacts, offered better protection and better views of the battlefield",
             "Strong cannon firepower and effective supply lines", "Strong defense and low cost to build"]
    },
    {
        /*information acquired thanks to: https://en.wikipedia.org/wiki/Coffee and https://www.ncausa.org/about-coffee/history-of-coffee */
        question: "The earliest records of brewing coffee span from 15th century in::",
        image: '<img  class= "quiz-image" src="assets/images/coffee.jpg" alt="coffee">',
        correct: "Yemen",
        answers: ["Cuba", "Florida", "Yemen", "Spain"]
    }
    ];

/* Variables */
let question= document.getElementById('question');
let totalQuestions= 0; /* number of awensered question*/
let score = 0; /* number of current correct awensered questions */
let points= document.getElementById('score');
let quizImage= document.getElementById("quizImage");
let answer1= document.getElementById('answer1');
let answer2= document.getElementById('answer2');
let answer3= document.getElementById('answer3');
let answer4= document.getElementById('answer4');
/*constants */
const quizArea= document.getElementById("quizArea");
const intro = document.getElementById("intro");

/*Event listener for selecting awensers*/
document.addEventListener('click', e =>{
    if (e.target.matches('.answer')){
        calcScore(e);
        nextQuestion();

    }
});

  /*Function that hides intro page and shows Quzi HTML structure - ispired by  https://dev.to/sulaimonolaniran/building-a-simple-quiz-with-html-css-and-javascript-4elp */
function hideIntro (){
    
    intro.classList.add('hidden') ;
    //createHTML(questions)
    quizArea.classList.remove('hidden');
    displayQuestion();
}

  //function to display questions - ispired by https://github.com/Ahmad528/quizApp
function displayQuestion(){
    question.innerHTML= 'Question:'+(totalQuestions+1)+': '+questions[totalQuestions].question;
    quizImage.innerHTML= questions[totalQuestions].image;
    answer1.innerHTML= questions[totalQuestions].answers[0];
    answer2.innerHTML= questions[totalQuestions].answers[1];
    answer3.innerHTML= questions[totalQuestions].answers[2];
    answer4.innerHTML= questions[totalQuestions].answers[3];
}

//function to calculate scores - ispired by https://github.com/Ahmad528/quizApp
function calcScore(e){
    if(e.srcElement.innerText===questions[totalQuestions].correct) //Tnx my mentor for helping me locate the lcoation of the desired atribure in the element
    {
        alert('Answer is correct!');
        score= score+1;
    }
    else{
        alert('Answer is wrong!');
    }
    //setTimeout(nextQuestion,300);
}

//function to display next question - ispired by https://github.com/Ahmad528/quizApp
function nextQuestion(){
    if(totalQuestions<9)
    {
        totalQuestions=totalQuestions+1;
       displayQuestion();
    }
    else{
        //hide question area - ispired by  https://dev.to/sulaimonolaniran/building-a-simple-quiz-with-html-css-and-javascript-4elp*/
        quizArea.classList.add('hidden');
        //reveale score area
        let end = document.getElementById("scoreArea");
        end.classList.remove('hidden');
        points.innerHTML= score +'/10'; /*display score after the last question */
    }
}
