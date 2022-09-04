// Setting date that is being countdown to
var countDownDate = new Date("Sept 5, 2023 12:00:00").getTime();
// Rate at which the countdown is updated (1 Second)
var countdownTotal = setInterval(function () {
	// Getting todays date and time
	var now = new Date().getTime();
	// Distance between future date and current date
	var distance = countDownDate - now;
	// Time calculations
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	// Input timer into HTML
	document.getElementById("countdown").innerHTML =
		days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

	// If the countdown finishes
	if (distance < 0) {
		clearInterval(countdownTotal);
		document.getElementById("countdown").innerHTML = "Complete!";
	}
}, 1000);
