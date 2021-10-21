# History fun fact quiz

![ami.responsive](docs/supporting_images/responsive.JPG)

History fun fact quiz is a site that provides a short and fun quiz for anyone who likes quizzes and historical topics with fun facts. Images presented in the quiz help you to get into the theme of the question. Have fun! 



## Features

### Color scheme
Background color Peach ( #EDD1B0) has been chosen based on study: ["Good Background Colors for Readers:A Study of People with and without Dyslexia"](https://www.researchgate.net/publication/320541475_Good_Background_Colors_for_Readers_A_Study_of_People_with_and_without_Dyslexia). THis bacground colour is show to have one of the lowest reading time with   oneof the lowest data spread between both the Dyslexia Group and Control Group. #BAA48A has been chosen for button colors. It fits nice with the background color and makes the text readable. 

![color_scheme](docs/supporting_images/color_scheme2.JPG)


### Font selection
Roboto Medium font has been chosen for headers with recommended Lato Regular for easier reading. 

### Quiz flow 
The site consists of an intro greeting and an initiate quiz button. Once the quiz is initiated, the stack of questions is drawn from an array of unused questions. Each question offers four answers to choose from as well as an image related to the topic. Questions are inspected if they have already been provided to the user. If the question has already been previously read by the user during the ongoing quiz sessions, it is replaced with the unread question.  

Once the user answers and submits the question, the javascript identifies if the answer is correct or wrong and adds the number to the count to either to wrong or correct answer. The process continues till the user uses answers ten questions. In the end, the user is congratulated on participation with the image of Napoleon and displayed score. 

![quiz_flow](docs/supporting_images/flow_chart.JPG)

#### Wireframes
[Wireframes](docs/wireframes/PP2-History_Fun_Facts-wireframes.pdf) have been used as guidelines to build the quiz page. The quiz page consist of three main areas.

The first area is the intro page. This area contains the welcoming text with instructions and the start quiz button.  This area reveals the quiz area while being hidden by clicking the "Start Quiz" button..

![intro.page](docs/supporting_images/Intro_page.JPG)

The quiz area provides the user with the questions and four possible answers, and a quiz image that fits the topic of the given question. By clicking on the answer, the user is informed if the question was correct or false. JavaSript is calculating score in the background. After the user clicks ok on the alert message, the quiz area removes the answered question and moves on to the new question. When then questions have been answered, the quiz area becomes hidden, and quiz end area is revealed to the user. 

![quiz.area](docs/supporting_images/qestion_area.JPG)

Quiz end area thanks the user for participating and displays the total score to the user. Napoleon's picture is displayed to keep with the historical theme. By clicking the "Back to home" button, the page reloads, and the user is shown the intro page area. From this point, the user can retry the quiz.

![quiz.end](docs/supporting_images/quiz_end.JPG)

### Questions

Content has been chosen based on the reads of the pages credited in the code in the js. The idea was to present fun facts that are not too common but also not too specific to make it fun for the wider audience and encourage curiosity for topics related to history.  

### Features to implement

For future development, the following items are taken into consideration:
* creation of json file that contains 30+ questions
* adding code to shuffle questions to increase the repeatability of the quiz
* adding code to shuffle the order of the offered answers 
* introducing a fun fact text related to the question to make the quiz more rewarding

## Testing


## Deployment


## Cedits

### Images

Most of the images have been aqured from [Pixabay](https://pixabay.com/). 
Big shout out to:
* [Scarlet_Letter](https://pixabay.com/users/scarlet_letter-1644696/) for image of the [printing press](https://pixabay.com/illustrations/printing-press-printing-press-paper-1093509/).
* [ArtTower](https://pixabay.com/users/arttower-5337/) for images of [Venice](https://pixabay.com/illustrations/venice-italy-6683160/) and [barrels](https://pixabay.com/photos/barrels-kegs-casks-wine-containers-52934/) 
* [GDJ](https://pixabay.com/users/gdj-1086657/) for images of [trade caravan](https://pixabay.com/vectors/beach-camels-caravan-people-5437910/) and [Columbus](https://pixabay.com/vectors/christopher-columbus-portrait-6471762/)
* [ArtsyBee](https://pixabay.com/users/artsybee-462611/) for [Egyptian themed](https://pixabay.com/illustrations/egyptian-design-man-woman-priest-1822015/) image
* [jon57](https://pixabay.com/users/jon57-1587760/) for image of [fort cannon](https://pixabay.com/photos/cannon-gun-rampart-battlement-2034724/)
* [Ri_Ya](https://pixabay.com/users/ri_ya-12911237/) for nice image of [coffee beans](https://pixabay.com/photos/coffee-beans-seed-caffeine-cafe-6632524/)
* [WikiImages](https://pixabay.com/users/wikiimages-1897/) for an image of [Napoleon](https://pixabay.com/photos/napoleon-bonaparte-emperor-france-67784/) and [French Revolution](https://pixabay.com/users/wikiimages-1897/)