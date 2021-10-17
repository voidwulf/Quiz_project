/* Ferch questions from json file */
const questions = fetch("assets/data/questions.json").then(res => res.json())

function createHTML (questions){
    questions.forEach(question => {
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


