// var clock = setInterval(function() { timer() }, 1000);

// function timer() {
//     var d = new Date();
//     var timing = d.toLocaleTimeString();
//     document.getElementById("go").innerHTML = timing;
// }

function clock() {
	var d = new Date()
	var hours = d.getHours()
	var min = d.getMinutes()
	var sec = d.getSeconds()
	var milli = d.getMilliseconds()
	var merdiem = "AM"
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
	clock.innerText = hours + ":" + min + ":" + sec + ":" + milli + ":" + merdiem
}
setInterval(clock, 1)

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

// var Bcolor = setInterval(function(){ setBColor() }, 300000); //300,000 milliseconds or 5 min = 1000 mill * 60 seconds * 5 min 
 
// function setBColor() {
// 	var a = document.body;
// 	a.style.backgroundColor = a.style.backgroundColor == "yellow" ? "pink" : "yellow";
// }
 
// function stopBColor() {
//   clearInterval(Bcolor);
// }

// var TColor = setInterval(function(){ setTColor() }, 3600000) //1000ms*60s*60min*1hr

// function setTColor() {
// 	var z = document.body    //1 thru 12 needs a color 
// 	if(___ == 1) {        
//   		z.style.h2 = z.style.h2 == "pink"
// 	} else if(___ == 2) {
// 		z.style.h2 = z.style.h2 == "green"
// 	} else if...                          //loop?
// }

// difference between 1 and 3???? text???
