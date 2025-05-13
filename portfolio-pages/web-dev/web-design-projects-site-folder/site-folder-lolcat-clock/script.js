//LOLcat clock

var time = new Date().getHours();
var messageText;

var timeEventJS = document.getElementById("timeEvent");

var lolcatImage = document.getElementById("lolcat");

var partyTimeButton = document.getElementById("partyTimeButton");

var isPartyTime = false;

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector")

var lunchTimeSelector = document.getElementById("lunchTimeSelector")

var napTimeSelector = document.getElementById("napTimeSelector")

var noon = 12
var evening = 17
var wakeUpTime = 8;
var lunchTime = 13;
var napTime = 15;
var partyTime;


var updateClock = function()
{


   if (time == wakeUpTime){
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
      messageText = "Wake up, wake up, WAKE UP";
   }

	else if (time<noon){
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
      messageText = "good morning";
   }

  else if (time == lunchTime){
     image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
      messageText = "Oh, yum! Time to eat";
   }

  else if (time == napTime){
     image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
      messageText = "...so sleepy, time to nap";
   }

   else if (time >= evening){
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
      messageText = "good evening";
   }

  else if (time == partyTime){
     image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
      messageText = "WooHoo PARTY time!";
   }

	else {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
      messageText = "good afternoon";
   }

console.log(messageText)

timeEventJS.innerText = messageText;
lolcat.src = image;




   var showCurrentTime = function()
   {
       // display the string on the webpage
       var clock = document.getElementById('clock');

       var currentTime = new Date();

       var hours = currentTime.getHours();
       var minutes = currentTime.getMinutes();
       var seconds = currentTime.getSeconds();
       var meridian = "AM";

       // Set hours
       if (hours >= noon)
       {
           meridian = "PM";
       }
       if (hours > noon)
       {
           hours = hours - 12;
       }

       // Set Minutes
       if (minutes < 10)
       {
           minutes = "0" + minutes;
       }

       // Set Seconds
       if (seconds < 10)
       {
           seconds = "0" + seconds;
       }

       // put together the string that displays the time
       var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

       clock.innerText = clockTime;
   };

showCurrentTime();

};

updateClock();

var oneSecond = 1000;

setInterval( updateClock, oneSecond);


var wakeUpEvent = function()
{
   wakeUpTime = wakeUpTimeSelector.value;
};


var lunchTimeEvent = function()
{
   lunchTime = lunchTimeSelector.value;
};


var napTimeEvent = function()
{
   napTime = napTimeSelector.value;
};


var partyEvent = function()
{
   if (isPartyTime === false) {
      isPartyTime = true;
       time = partyTime;
      partyTimeButton.innerText = "Party TIME!";
      partyTimeButton.style.backgroundColor = "#222";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

partyTimeButton.addEventListener("click", partyEvent)


lunchTimeSelector.addEventListener('change', lunchTimeEvent);

napTimeSelector.addEventListener('change', napTimeEvent);
