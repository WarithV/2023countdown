
/*This code all written by Prem Warith.
© 2022 Prem Warith. All Rights Reserved.*/

$(document).ready(function(){
	function countdown(et) {
	var between = new Date(et).getTime()-new Date().getTime();
	if (between<=0) {
	    $("#kcd").html("0");
	$("#kch").html("0");
	$("#kcm").html("0");
	$("#kcs").html("0");
	return true;
	}
	intervalll = setInterval(function(){
	between -= 1000;
	var second = noR(between,1000);
	var seconds = second % 60;
	var minute = noR(second,60);
	var minutes = minute % 60; 
	var hour = noR(minute,60);
	var hours = hour % 24; 
	var days = noR(hour,24);
	$("#kcd").html(days);
	$("#kch").html(hours);
	$("#kcm").html(minutes);
	$("#kcs").html(seconds);
	if (between==et || between<0) {
		clearInterval(intervalll);
	}
	},1000);
}
		function noR(i,d) {
		return (i - (i % d)) / d;
	  }
countdown("1 Jan 2023");
});