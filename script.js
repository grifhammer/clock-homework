$(document).ready(function(){
	currTime = new Date();
	updateTime(currTime);

});

function updateTime(currDateObj){
	$('.hour').text(currDateObj.getHours())
	$('.minute').text(currDateObj.getMinutes())
	$('.second').text(currDateObj.getSeconds())
}