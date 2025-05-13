//MAGIC 8 BALL
$(document).ready(function() {
var magic8Ball = {};


magic8Ball.listOfAnswers = ["keep trying", "believe", "work for it", "maybe, maybe not, I'm not telling", "try again", "stay the course", "take another step forward", "follow your dreams"];

$("#answer").hide();


magic8Ball.askQuestion = function(question)
{
   $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
   $("#answer").fadeIn(4000);
   var randomNumber = Math.random();
   var randomNumberArray = randomNumber * this.listOfAnswers.length;
   var randomIndex = Math.floor(randomNumberArray);
   var answer = this.listOfAnswers[randomIndex];
   $("#answer").text(answer);

   console.log (question);
   console.log (answer);

};

   var askAQuestion = function()
   {
      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

      setTimeout(
      function() {
      var question = prompt("Ask me anything");
      magic8Ball.askQuestion(question);
      $("#8ball").effect("shake");
      }, 500);

   };

$("#questionButton").click(askAQuestion);

//8 side of the 8-ball
   // https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png

// answer side of the 8-ball
   // https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png

//jQuery closing tag
});


//ASK magic 8 ball a question
//shake magic 8 ball
//magic 8 ball responds with an answer from //the list


//function ask question
//	INPUT question
//	shake magic 8 ball
//    magic 8 ball gives a random answer from //the list
//    OUTPUT answer
//   STOP
