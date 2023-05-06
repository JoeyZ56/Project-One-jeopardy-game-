    /*----- constants -----*/
const scoreBoard = document.getElementById('score');

const button1 = document.querySelector("#Btn1");
const button2 = document.querySelector("#Btn2");
const button3 = document.querySelector("#Btn3");
const button4 = document.querySelector("#Btn4");
const button5 = document.querySelector("#Btn5");

const button6 = document.querySelector('submit');



	/*----- state variables -----*/


	/*----- cached elements  -----*/


	/*----- event listeners -----*/
button1.addEventListener('click', async (event) => {
    const response = await fetch('https://jservice.io/api/category?id=102');
    const data1 = await response.json()
    console.log(data1)
});
button2.addEventListener('click', async (event) => {
    const response = await fetch("https://jservice.io/api/category?id=1242");
    const data2 = await response.json()
    console.log(data2)
});
button3.addEventListener('click', async (event) => {
    const response = await fetch("https://jservice.io/api/category?id=122");
    const data3 = await response.json()
    console.log(data3)
});
button4.addEventListener('click', async (event) => {
    const response = await fetch("https://jservice.io/api/category?id=371");
    const data4 = await response.json()
    console.log(data4)
});
button5.addEventListener('click', async (event) => {
    const response = await fetch("https://jservice.io/api/category?id=458");
    const data5 = await response.json()
    console.log(data5)
    
});

	/*----- functions -----*/
    

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
            this.inputEl = element.querySelector('input[name-user-answer]')
            this.modalEl = element.querySelector('.mymodal');
            this.clueEl = element.querySelector('.jeapordyclue');
            this.answerEl = element.querySelector('.answer');
            this.correctAnserEl = element.querySelector('.correctanswer');
            this.incorrectAnswerEl = element.querySelector('.incorrectanswer');
            this.realAnswerEl = element.querySelector('.thecorrectanswer');
        }
        initGame() {
            this.updateScore(0);
            this.fetchcategories();
        }
        updateScore(update) {
            this.score += update;
            this.scoreBoardEl.textContent = this.score
        }
        fetchcategories() {
            const categories = this.useCategoryIds.map(categoryId => {
                return new Promise((resolve, reject) => {
                    fetch(`https://jservice.io/api/category?id=${categoryId}`)
                    .then(response => response.json().then(data => {
                        console.log(data)
                        resolve(data)
                    }))
                })
            });
            Promise.all(categories).then(results => {
                results.forEach((category, categoryIndex) => {

                    let newJpCategory = {
                        title: category.title,
                        clues: []
                    }
                    let clues = shuffle(category.clues).splice(0,5).forEach((clue, index) => {
                        let clueId = categoryIndex + "-" + index;
                        newCategory.clue.push(clueId);

                        this.clues[clueId] = {
                            question: clue.question,
                            answer: clue.answer,
                            value: (index + 1) * 100
                        }
                    })
                    this.categories.push(newCategory);
                })
            })
        }
    }
    const game = new JeapordyGame (document.querySelector('.myjeapordygame'), {});

    game.initGame();


    