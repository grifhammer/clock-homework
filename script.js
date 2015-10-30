$(document).ready(function(){
	function fixZero(i){
		if(i < 10){
			i = "0" + i;
		}
		return i;
	}
	function updateTime(){
		currTime = new Date();
		h = fixZero(currTime.getHours());
		m = fixZero(currTime.getMinutes());
		s = fixZero(currTime.getSeconds());
		$('.hour').text(h)
		$('.minute').text(m)
		$('.second').text(s)
		if(m == 0 && s ==0){
			addColor('blue',60000);
		}
		if(s == 0){
			addColor('red',1000);
		}
		
	}
	currTime = new Date();
	var runClock = setInterval(updateTime, 500);
	function addColor(color, timeOut){
		$('#time').addClass(color);
		setTimeout(removeColor, timeOut, color);
	}
	function removeColor(color){
		$('#time').removeClass(color);
	}
	$('.stop').click(function(){
		clearInterval(runClock);
	});
	$('.go').click(function(){
		runClock = setInterval(updateTime, 500);
	});
	
});
