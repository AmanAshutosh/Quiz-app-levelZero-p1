// quiz app: 01
var readlineSync = require("readline-sync");

score = 0;

var userName = readlineSync.question("What's your name? ");

 console.log("Aapka swagat hai ! ", userName + " How much you know INDIA me ");

 // function start: 

 function game (question,answer){
   var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()){
      console.log("Bulkul sahi Jawab");
      score = score + 1;
    
    }
      else{
        console.log("oh! Ye glat jawab hai!")
      } 

      console.log("current score : ", score);
      console.log("-------------------------")
 }

//array of objects
var question = [{
  //q1
  question: "01: What is the Hindi name of India? ",
  answer: "Bharat"
},{
   //q2
   question: "02: How many colours are there on the Indian Flag? ",
   answer: "3"
 },{
   //q3
   question : "03: Which is the smallest state in India? ",
   answer: "Goa"
  
 },{
   //q4
   question: "04: Which animal is the national animal of India? ",
   answer: "Tiger"
  },{
   //q5
    question: "05: What is the capital city of India? ",
   answer: "Delhi"
 },{
    //q6
    question : "06: What is the National Currency of India? ",
    answer: "Rupee"

 },{
    //q7
    question : "07: Which is the national sport of India? ",
    answer: "Hockey"

 },{
    //q8
    question : "08: Who was India’s first prime minister? ",
    answer: "Jawahar Lal Nehru "

 },{
    //q9
    question : "09: Which is the largest union territory of India? ",
    answer: " Andaman & Nicobar Island "

 },{
    //q10
    question : "10: Which of the seven wonders of the world is located in India? ",
    answer: "Taj Mahal "

 }];

 //loop
 for(var i=0; i<question.length; i++){
   var currentQuestion = question[i];
   game(currentQuestion.question, currentQuestion.answer);
 }

 console.log("thankyou for playing the game!, Hope you enjoyed..")
 console.log("Your Total score is: " + score);




