  /*----- constants -----*/
  const game = document.querySelector('#myjeapordygame');
  const scoreBoard = document.querySelector('.score');
  const jeapordyquestion = document.querySelector('.jeapordyquestion')
  const jeapordyanswer =  document.querySelector('.jeapordyanswer')
  console.log(jeapordyquestion)
  
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
  
  
  
  
  
  
      /*----- state variables -----*/
  
  
      /*----- cached elements  -----*/
  
  
      /*----- event listeners -----*/
      //Movies category
  button1.addEventListener('click', async (event) => {
      const response = await fetch('https://jservice.io/api/category?id=102');
      const data1 = await response.json()
      console.log(data1)
      jeapordyquestion.innerHTML = `${data1.clues[0, 1, 2, 3, 4, 5].question}`;
      setTimeout(() => {
        jeapordyanswer.innerHTML = `${data1.clues[0, 1, 2 , 3, 4, 5].answer}`;
      }, 15000) 

      
      
  });
  button6.addEventListener('click', async (event) => {
      const response = await fetch('https://jservice.io/api/category?id=102');
      const data1 = await response.json()
      console.log(data1)
      jeapordyquestion.innerHTML = `${data1.clues[6, 7, 8, 9, 10].question}`;
  });
  button11.addEventListener('click', async (event) => {
      const response = await fetch('https://jservice.io/api/category?id=102');
      const data1 = await response.json()
      console.log(data1)
      jeapordyquestion.innerHTML = `${data1.clues[11, 12, 13, 14, 15].question}`;
  });
  button16.addEventListener('click', async (event) => {
      const response = await fetch('https://jservice.io/api/category?id=102');
      const data1 = await response.json()
      console.log(data1)
      jeapordyquestion.innerHTML = `${data1.clues[16, 17, 18, 19, 20].question}`;
  });
  button21.addEventListener('click', async (event) => {
      const response = await fetch('https://jservice.io/api/category?id=102');
      const data1 = await response.json()
      console.log(data1)
      jeapordyquestion.innerHTML = `${data1.clues[21, 22, 23, 24, 25].question}`;
  });

  //Songs category
    button2.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=1242");
      const data2 = await response.json()
      console.log(data2)
      jeapordyquestion.innerHTML = `${data2.clues[0, 1, 2, 3, 4].question}`;
  });
  button7.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=1242");
      const data2 = await response.json()
      console.log(data2)
      jeapordyquestion.innerHTML = `${data2.clues[5, 6, 7, 8, 9].question}`;
  });
  button12.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=1242");
      const data2 = await response.json()
      console.log(data2)
      jeapordyquestion.innerHTML = `${data2.clues[10, 11, 12, 13, 14].question}`;
  });
  button17.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=1242");
      const data2 = await response.json()
      console.log(data2)
      jeapordyquestion.innerHTML = `${data2.clues[15, 16, 17, 18, 19].question}`;
  });
  button22.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=1242");
      const data2 = await response.json()
      console.log(data2)
      jeapordyquestion.innerHTML = `${data2.clues[20, 21, 22, 23, 24].question}`;
  });

  //Food category
  button3.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=122");
      const data3 = await response.json()
      console.log(data3)
      jeapordyquestion.innerHTML = `${data3.clues[0, 1, 2 ,3 ,4].question}`;
  });
  button8.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=122");
      const data3 = await response.json()
      console.log(data3)
      jeapordyquestion.innerHTML = `${data3.clues[5, 6, 7, 8, 9].question}`;
  });
  button13.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=122");
      const data3 = await response.json()
      console.log(data3)
      jeapordyquestion.innerHTML = `${data3.clues[10, 11, 12, 13, 14].question}`;
  });
  button18.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=122");
      const data3 = await response.json()
      console.log(data3)
      jeapordyquestion.innerHTML = `${data3.clues[15, 16, 17, 18, 19].question}`;
  });
  button23.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=122");
      const data3 = await response.json()
      console.log(data3)
      jeapordyquestion.innerHTML = `${data3.clues[20, 21, 22, 23, 24].question}`;
  });

  //Dog category
  button4.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=371");
      const data4 = await response.json()
      console.log(data4)
      jeapordyquestion.innerHTML = `${data4.clues[0, 1, 2, 3, 4].question}`;
  });
  button9.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=371");
      const data4 = await response.json()
      console.log(data4)
      jeapordyquestion.innerHTML = `${data4.clues[5, 6, 7, 8, 9].question}`;
  });
  button14.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=371");
      const data4 = await response.json()
      console.log(data4)
      jeapordyquestion.innerHTML = `${data4.clues[10, 11, 12, 13, 14].question}`;
  });
  button19.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=371");
      const data4 = await response.json()
      console.log(data4)
      jeapordyquestion.innerHTML = `${data4.clues[15, 16, 17, 18, 19].question}`;
  });
  button24.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=371");
      const data4 = await response.json()
      console.log(data4)
      jeapordyquestion.innerHTML = `${data4.clues[20, 21, 22, 23, 24].question}`;
  });

  //Fwords category
  button5.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=458");
      const data5 = await response.json()
      console.log(data5)
      jeapordyquestion.innerHTML = `${data5.clues[0, 1, 2].question}`;
  });
  button10.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=458");
      const data5 = await response.json()
      console.log(data5)
      jeapordyquestion.innerHTML = `${data5.clues[4, 5, 6].question}`;
  });
  button15.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=458");
      const data5 = await response.json()
      console.log(data5)
      jeapordyquestion.innerHTML = `${data5.clues[7, 8, 9].question}`;
  });
  button20.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=458");
      const data5 = await response.json()
      console.log(data5)
      jeapordyquestion.innerHTML = `${data5.clues[10, 11, 12].question}`;
  });
  button25.addEventListener('click', async (event) => {
      const response = await fetch("https://jservice.io/api/category?id=458");
      const data5 = await response.json()
      console.log(data5)
      jeapordyquestion.innerHTML = `${data5.clues[13, 14, 15].question}`;
  });
  
      /*----- functions -----*/
