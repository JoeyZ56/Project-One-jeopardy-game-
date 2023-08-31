/*----- constants -----*/
const game = document.querySelector("#myjeapordygame");
const scoreBoard = document.querySelector(".scorecounter");
const jeapordyquestion = document.querySelector(".jeapordyquestion");
const jeapordyanswer = document.querySelector(".jeapordyanswer");

//row 100
const button1 = document.querySelector("#Btn1-100");
const button2 = document.querySelector("#Btn2-100");
const button3 = document.querySelector("#Btn3-100");
const button4 = document.querySelector("#Btn4-100");
const button5 = document.querySelector("#Btn5-100");
//row 200
const button6 = document.querySelector("#Btn1-200");
const button7 = document.querySelector("#Btn2-200");
const button8 = document.querySelector("#Btn3-200");
const button9 = document.querySelector("#Btn4-200");
const button10 = document.querySelector("#Btn5-200");
//row 300
const button11 = document.querySelector("#Btn1-300");
const button12 = document.querySelector("#Btn2-300");
const button13 = document.querySelector("#Btn3-300");
const button14 = document.querySelector("#Btn4-300");
const button15 = document.querySelector("#Btn5-300");
//row 400
const button16 = document.querySelector("#Btn1-400");
const button17 = document.querySelector("#Btn2-400");
const button18 = document.querySelector("#Btn3-400");
const button19 = document.querySelector("#Btn4-400");
const button20 = document.querySelector("#Btn5-400");
//row 500
const button21 = document.querySelector("#Btn1-500");
const button22 = document.querySelector("#Btn2-500");
const button23 = document.querySelector("#Btn3-500");
const button24 = document.querySelector("#Btn4-500");
const button25 = document.querySelector("#Btn5-500");
//counters
const button26 = document.querySelector("#add100");
const button27 = document.querySelector("#add200");
const button28 = document.querySelector("#add300");
const button29 = document.querySelector("#add400");
const button30 = document.querySelector("#add500");

/*----- state variables -----*/

/*----- cached elements  -----*/

/*----- event listeners -----*/
//Movies category
button1.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=102");
  const data1 = await response.json();
  console.log(data1);
  //reassigning two variables to the same value!
  jeapordyquestion.innerHTML = `${data1.clues[(0, 1, 2, 3, 4, 5)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = currentQuestion = `${
      data1.clues[(0, 1, 2, 3, 4, 5)].answer
    }`;
  }, 15000);
});
button6.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=102");
  const data1 = await response.json();
  jeapordyquestion.innerHTML = `${data1.clues[(6, 7, 8, 9, 10)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data1.clues[(6, 7, 8, 9, 10)].answer}`;
  }, 15000);
});
button11.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=102");
  const data1 = await response.json();
  jeapordyquestion.innerHTML = `${data1.clues[(11, 12, 13, 14, 15)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data1.clues[(11, 12, 13, 14, 15)].answer}`;
  }, 15000);
});
button16.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=102");
  const data1 = await response.json();
  jeapordyquestion.innerHTML = `${data1.clues[(16, 17, 18, 19, 20)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data1.clues[(16, 17, 18, 19, 20)].answer}`;
  }, 15000);
});
button21.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=102");
  const data1 = await response.json();
  jeapordyquestion.innerHTML = `${data1.clues[(21, 22, 23, 24, 25)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data1.clues[(21, 22, 23, 24, 25)].answer}`;
  }, 15000);
});

//Songs category
button2.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=1242");
  const data2 = await response.json();
  jeapordyquestion.innerHTML = `${data2.clues[(0, 1, 2, 3, 4)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data2.clues[(0, 1, 2, 3, 4)].answer}`;
  }, 15000);
});
button7.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=1242");
  const data2 = await response.json();
  jeapordyquestion.innerHTML = `${data2.clues[(5, 6, 7, 8, 9)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data2.clues[(5, 6, 7, 8, 9)].answer}`;
  }, 15000);
});
button12.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=1242");
  const data2 = await response.json();
  jeapordyquestion.innerHTML = `${data2.clues[(10, 11, 12, 13, 14)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data2.clues[(11, 12, 13, 14)].answer}`;
  }, 15000);
});
button17.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=1242");
  const data2 = await response.json();
  jeapordyquestion.innerHTML = `${data2.clues[(15, 16, 17, 18, 19)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data2.clues[(15, 16, 17, 18, 19)].answer}`;
  }, 15000);
});
button22.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=1242");
  const data2 = await response.json();
  jeapordyquestion.innerHTML = `${data2.clues[(20, 21, 22, 23, 24)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data2.clues[(21, 22, 23, 24)].answer}`;
  }, 15000);
});

//Food category
button3.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=122");
  const data3 = await response.json();
  jeapordyquestion.innerHTML = `${data3.clues[(0, 1, 2, 3, 4)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data3.clues[(0, 1, 2, 3, 4)].answer}`;
  }, 15000);
});
button8.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=122");
  const data3 = await response.json();
  jeapordyquestion.innerHTML = `${data3.clues[(5, 6, 7, 8, 9)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data3.clues[(5, 6, 7, 8, 9)].answer}`;
  }, 15000);
});
button13.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=122");
  const data3 = await response.json();
  jeapordyquestion.innerHTML = `${data3.clues[(10, 11, 12, 13, 14)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data3.clues[(10, 11, 12, 13, 14)].answer}`;
  }, 15000);
});
button18.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=122");
  const data3 = await response.json();
  jeapordyquestion.innerHTML = `${data3.clues[(15, 16, 17, 18, 19)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data3.clues[(15, 16, 17, 18, 19)].answer}`;
  }, 15000);
});
button23.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=122");
  const data3 = await response.json();
  jeapordyquestion.innerHTML = `${data3.clues[(20, 21, 22, 23, 24)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data3.clues[(20, 21, 22, 23, 24)].answer}`;
  }, 15000);
});

//Dog category
button4.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=371");
  const data4 = await response.json();
  jeapordyquestion.innerHTML = `${data4.clues[(0, 1, 2, 3, 4)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data4.clues[(0, 1, 2, 3, 4)].answer}`;
  }, 15000);
});
button9.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=371");
  const data4 = await response.json();
  jeapordyquestion.innerHTML = `${data4.clues[(5, 6, 7, 8, 9)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data4.clues[(5, 6, 7, 8, 9)].answer}`;
  }, 15000);
});
button14.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=371");
  const data4 = await response.json();
  jeapordyquestion.innerHTML = `${data4.clues[(10, 11, 12, 13, 14)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data4.clues[(10, 11, 12, 13, 14)].answer}`;
  }, 15000);
});
button19.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=371");
  const data4 = await response.json();
  jeapordyquestion.innerHTML = `${data4.clues[(15, 16, 17, 18, 19)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data4.clues[(15, 16, 17, 18, 19)].answer}`;
  }, 15000);
});
button24.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=371");
  const data4 = await response.json();
  jeapordyquestion.innerHTML = `${data4.clues[(20, 21, 22, 23, 24)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data4.clues[(20, 21, 22, 23, 24)].answer}`;
  }, 15000);
});

//Fwords category
button5.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=458");
  const data5 = await response.json();
  jeapordyquestion.innerHTML = `${data5.clues[(0, 1, 2)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data5.clues[(0, 1, 2)].answer}`;
  }, 15000);
});
button10.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=458");
  const data5 = await response.json();
  jeapordyquestion.innerHTML = `${data5.clues[(4, 5, 6)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data5.clues[(4, 5, 6)].answer}`;
  }, 15000);
});
button15.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=458");
  const data5 = await response.json();
  jeapordyquestion.innerHTML = `${data5.clues[(7, 8, 9)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data5.clues[(7, 8, 9)].answer}`;
  }, 15000);
});
button20.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=458");
  const data5 = await response.json();
  jeapordyquestion.innerHTML = `${data5.clues[(10, 11, 12)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data5.clues[(10, 11, 12)].answer}`;
  }, 15000);
});
button25.addEventListener("click", async (event) => {
  const response = await fetch("https://jservice.io/api/category?id=458");
  const data5 = await response.json();
  jeapordyquestion.innerHTML = `${data5.clues[(13, 14, 15)].question}`;
  setTimeout(() => {
    jeapordyanswer.innerHTML = `${data5.clues[(13, 14, 15)].answer}`;
  }, 15000);
});

//Counters
button26.addEventListener("click", (event) => {
  scoreBoard.textContent = parseInt(scoreBoard.textContent) + 100;
  console.log(scoreBoard.textContent);
});
button27.addEventListener("click", (event) => {
  scoreBoard.textContent = parseInt(scoreBoard.textContent) + 200;
  console.log(scoreBoard.textContent);
});
button28.addEventListener("click", (event) => {
  scoreBoard.textContent = parseInt(scoreBoard.textContent) + 300;
  console.log(scoreBoard.textContent);
});
button29.addEventListener("click", (event) => {
  scoreBoard.textContent = parseInt(scoreBoard.textContent) + 400;
  console.log(scoreBoard.textContent);
});
button30.addEventListener("click", (event) => {
  scoreBoard.textContent = parseInt(scoreBoard.textContent) + 500;
  console.log(scoreBoard.textContent);
});
