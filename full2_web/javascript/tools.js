function createEasterEgg(elementID, count, callback) {
	let element = document.getElementById(elementID);
	let clicks = 0;
	element.addEventListener("click", () => {
		// console.log('clicked', clicks)
		clicks++;
		if (clicks == count) {
			// click = 0;

			callback();
		}
	});
}

window.addEventListener("load", () => {
	createEasterEgg("logo1", 5, () => {
		// alert("Button 1 Easter egg activated!");
		var audio = new Audio("./Sounds/NGGYUOriginal.mp3");
		document.title = `We're no strangers to love
        You know the rules and so do I (do I)
        A full commitment's what I'm thinking of
        You wouldn't get this from any other guy
        I just wanna tell you how I'm feeling
        Gotta make you understand
        Never gonna give you up
        Never gonna let you down
        Never gonna run around and desert you
        Never gonna make you cry
        Never gonna say goodbye
        Never gonna tell a lie and hurt you
        We've known each other for so long
        Your heart's been aching, but you're too shy to say it (say it)
        Inside, we both know what's been going on (going on)
        We know the game and we're gonna play it
        And if you ask me how I'm feeling
        Don't tell me you're too blind to see
        Never gonna give you up
        Never gonna let you down
        Never gonna run around and desert you
        Never gonna make you cry
        Never gonna say goodbye
        Never gonna tell a lie and hurt you
        Never gonna give you up
        Never gonna let you down
        Never gonna run around and desert you
        Never gonna make you cry
        Never gonna say goodbye
        Never gonna tell a lie and hurt you
        We've known each other for so long
        Your heart's been aching, but you're too shy to say it (to say it)
        Inside, we both know what's been going on (going on)
        We know the game and we're gonna play it
        I just wanna tell you how I'm feeling
        Gotta make you understand
        Never gonna give you up
        Never gonna let you down
        Never gonna run around and desert you
        Never gonna make you cry
        Never gonna say goodbye
        Never gonna tell a lie and hurt you
        Never gonna give you up
        Never gonna let you down
        Never gonna run around and desert you
        Never gonna make you cry
        Never gonna say goodbye
        Never gonna tell a lie and hurt you
        Never gonna give you up
        Never gonna let you down
        Never gonna run around and desert you
        Never gonna make you cry
        Never gonna say goodbye
        Never gonna tell a lie and hurt you`;
		audio.play();
		document.getElementById("conta").style.backgroundImage = "url(images/DEVSeasteregg.png)";
		document.getElementById("sint-jan").src = "images/moha.png";
		document.getElementById("sint-jan").width = 200;

		document.getElementById("sint-jan-text").innerHTML =
			"vroeger was ik samen met een team samegezet om zo deze website te maaken als examen, en we hebben het vol met een grote easter eggs gestoken! Als je deze text zie is het dus in het eindproduct geraakt!";
	});

	createEasterEgg("conta", 10, () => {
		alert("10 times clicked");
	});
});

// const button2 = document.querySelector("#button2");
// createEasterEgg(button2, () => {
//     alert("Button 2 Easter egg activated!");
// });
