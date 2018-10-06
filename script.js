var database = [
	{
		username: "Dhanesh",
		password: "supersecret"
	}

];

var newsFeed = [

	{
		username: "Bobby",
		timeline: "So tired from all that learning"
	},

	{
		username: "Sally",
		timeline: "YOLO"
	}

	{
		username:"Mitch"
		timeline: "Deuces playa"
	}

];
prompt("Hello");

function signIn(user, pass){

	if(user === database[0].username && 
	   pass === database[0].password)
	{
		console.log(newsFeed);
	}
	else{
		alert("No bueno");
	}
}

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");


signIn(userNamePrompt,passwordPrompt);