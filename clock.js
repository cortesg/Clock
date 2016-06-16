// $(document).ready(function() {
function clock() {
	var d = new Date()
	var hours = d.getHours()
	var min = d.getMinutes()
	var sec = d.getSeconds()
	var milli = d.getMilliseconds()
	var merdiem = "AM"
	var clock = document.getElementById("clock")
	if(milli == 0) {
		milli = "000"
	} else if (milli < 10) {
		milli = "00" + milli
	} else if (milli < 100) {
		milli = "0" + milli
	}
	if(hours > 12) {
		hours = hours - 12
		merdiem = "PM"
	}
	if(min < 10) {
		min = "0" + min
	}
	if(sec < 10) {
		sec = "0" + sec
	}
	clock.innerText = hours + ":" + min + ":" + sec + ":" + milli + " " + merdiem

function setTColor() {
	var clocktext = document.getElementById("clock");
	var randomcolors=new Array("red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "gray", "olive")
	if(sec == 0) {
		clocktext.style.color=randomcolors[0] 
	} else if(sec == 1) {
		clocktext.style.color=randomcolors[1]
	} else if(sec == 2) {
		clocktext.style.color=randomcolors[2]
	} else if(sec == 3) {
		clocktext.style.color=randomcolors[3]
	} else if(sec == 4) {
		clocktext.style.color=randomcolors[4]
	} else if(sec == 5) {
		clocktext.style.color=randomcolors[5]
	} else if(sec == 6) {
		clocktext.style.color=randomcolors[6]
	} else if(sec == 7) {
		clocktext.style.color=randomcolors[7]
	} else if(sec == 8) {
		clocktext.style.color=randomcolors[8]
	} else if(sec == 9) {
		clocktext.style.color=randomcolors[9]
	} 
}

setTColor()


}
setInterval(clock, 1)

clock()

//innerhtml window.onload = function() {
//	FUNCTION();
//};

// }

// var CColor = setInterval(function(){ setCColor() }, 60000) //1000ms*60s*1min

// function setCColor() {
// 	var m = document.body
// 	if(___ % 2 == 1) {         //the minute is odd,  
//   		m.style.h1 = m.style.h1 == "black"
// 	} else {
// 		m.style.h1 = m.style.h1 == "green"
// 	}
// }

var BColor = setInterval(function(){ setBColor() }, 300000); //300,000 milliseconds or 5 min = 1000 mill * 60 seconds * 5 min 
 
function setBColor() {
	var html = document.body;
	var randomcolors=new Array("red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "gray")
	html.style.background=randomcolors[Math.floor(Math.random()*randomcolors.length)]  //Math.random generates a number between 0 and 1, that isn't a whole number, and also isn't 1. To get a number, for example between 0 and 10, multiply your answer by 10:
													// Math.random() * 10
												// To get it to be a whole number, i.e. an integer, apply Math.floor, which rounds down to the nearest whole number:
}
 

function stopBColor() {
  clearInterval(BColor);
}  // Future project: drop down menu which allows you to select color

// var TColor = setInterval(function(){ setTColor() }, 600) //1000ms*60s*60min*1hr










// var clock = setInterval(function() { timer() }, 1000);

// function timer() {
//     var d = new Date();
//     var timing = d.toLocaleTimeString();
//     document.getElementById("go").innerHTML = timing;
// }


// difference between 1 and 3???? text???
