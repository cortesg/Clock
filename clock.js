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
		var randomcolors=new Array("red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "gray", "olive", "gold", "teal")
		if(hours == 12) {
			clocktext.style.color=randomcolors[0] 
		} else if(hours == 1) {
			clocktext.style.color=randomcolors[1]
		} else if(hours == 2) {
			clocktext.style.color=randomcolors[2]
		} else if(hours == 3) {
			clocktext.style.color=randomcolors[3]
		} else if(hours == 4) {
			clocktext.style.color=randomcolors[4]
		} else if(hours == 5) {
			clocktext.style.color=randomcolors[5]
		} else if(hours == 6) {
			clocktext.style.color=randomcolors[6]
		} else if(hours == 7) {
			clocktext.style.color=randomcolors[7]
		} else if(hours == 8) {
			clocktext.style.color=randomcolors[8]
		} else if(hours == 9) {
			clocktext.style.color=randomcolors[9]
		} else if(hours == 10) {
			clocktext.style.color=randomcolors[10]
		} else if(hours == 11) {
			clocktext.style.color=randomcolors[11]
		}   //is there a loop method to complete this task? 
	}
	function setH2Color() {
		var h2text = document.getElementById("block");
		var randomcolors=new Array("black", "purple")
		if(sec % 2 == 1) {
			h2text.style.color=randomcolors[0] 
		} else if(sec % 2 == 0) {
			h2text.style.color=randomcolors[1]
		}
	}
	setTColor()
	setH2Color()
}
setInterval(clock, 1)
clock()

var BColor = setInterval(function(){ setBColor() }, 300000); //300,000 milliseconds or 5 min = 1000 mill * 60 seconds * 5 min 
 
function setBColor() {
	var html = document.body;
	var randomcolors=new Array("red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "gray")
	html.style.background=randomcolors[Math.floor(Math.random()*randomcolors.length)]  //Math.random generates a number between 0 and 1, that isn't a whole number, and also isn't 1. To get a number, for example between 0 and 10, multiply your answer by 10:
													// Math.random() * 10
												// To get it to be a whole number, i.e. an integer, apply Math.floor, which rounds down to the nearest whole number:
}
   //is there a if/else way to complete this task?

function stopTime() {
  clearInterval(clock);
} //Doesnt work

function stopBColor() {
  clearInterval(BColor);
}  // Future project: drop down menu which allows you to select color







// -------- ALTERNATIVE WAY BELOW for making clock ----------
// var clock = setInterval(function() { timer() }, 1000);

// function timer() {
//     var d = new Date();
//     var timing = d.toLocaleTimeString();
//     document.getElementById("go").innerHTML = timing;
// }



