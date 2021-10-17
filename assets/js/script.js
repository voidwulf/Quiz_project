/* Ferch questions from json file */
const questions = fetch("assets/data/questions.json").then(res => res.json())



/* Function that creates structure for quiz*/
function createHTML (){
    let quizSpace = document.getElementById("quizArea")
    quizSpace.innerHTML = `
    <p id="question"></p>
    <button class='question'></button>
    <button class='question'></button>
    <button class='question'></button>
    <button class='question'></button>
    <button id='submit'></button>

`;
}
/*Function that hides intro page and shows Quzi HTML structure */
function hideIntro (){
    let intro = document.getElementById("intro")
    intro.classList.add('hidden') 
    createHTML(questions)
}


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

}

