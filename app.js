    /*----- constants -----*/
const scoreBoard = document.getElementById('score');

const button1 = document.querySelectorAll("#Btn1");
const button2 = document.querySelectorAll("#Btn2");
const button3 = document.querySelectorAll("#Btn3");
const button4 = document.querySelectorAll("#Btn4");
const button5 = document.querySelectorAll("#Btn5");

const button6 = document.querySelector('submit');



	/*----- state variables -----*/


	/*----- cached elements  -----*/


	/*----- event listeners -----*/
button1.addEventListener('click', async (event) => {
    const response = await fetch("https://jservice.io/api/categories/102");
    const data1 = await response.json()
    console.log(data1)
});
button2.addEventListener('click', async (event) => {
    const response = await fetch("https://jservice.io/api/categories/1242");
    const data2 = await response.json()
});
button3.addEventListener('click', async (event) => {
    const response = await fetch("https://jservice.io/api/categories/122");
    const data3 = await response.json()
});
button4.addEventListener('click', async (event) => {
    const response = await fetch("https://jservice.io/api/categories/371");
    const data4 = await response.json()
});
button5.addEventListener('click', async (event) => {
    const response = await fetch("https://jservice.io/api/categories/458");
    const data5 = await response.json()
    
});

	/*----- functions -----*/
    //data1.clues[0].question.

//pulled this shuffle function from stackoverflow
function shuffle(a) {
    let j, x, i;
    for (i = a.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

    class JeapordyGame {
        constructor(element, options ={}) {
            this.useCategoryIds = options.useCategoryIds || [102, 1242, 122, 371, 458];
           
            this.categories = [];
            this.clue = {};

            this.currentClue = null;
            this.score = 0;

            this.boardEl = element.querySelector('.board');
            this.scoreBoardEl = element.querySelector('.score');
            this.formEl = element.querySelector('form');
            //got help on the 'inputEl' format from Drew conley's Youtube channel.
            this.inputEl = element.querySelector('input[name-user-answer]')
            this.modalEl = element.querySelector('.mymodal');
            this.clueEl = element.querySelector('.jeapordyclue');
            this.answerEl = element.querySelector('.answer');
            this.correctAnserEl = element.querySelector('.correctanswer');
            this.incorrectAnswerEl = element.querySelector('.incorrectanswer');
            this.realAnswerEl = element.querySelector('.thecorrectanswer');
        }
        initGame() {
            this.updateScore();
        }
        updateScore() {
            this.scoreBoardEl.textContent = this.score
        }
    }

    game.initGame();


    const game = new JeapordyGame (document.querySelector('.myjeapordygame'), {});