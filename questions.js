var theClass = ["Tristan",
				"Joshua", 
				"Bogden",
				"Laz",
				"Keith",
				"Kurt",
				"Joe",
				"Koshawn",
				"Patrick",
				"Jeremy",
				"Will",
				"The Handsom One"
	];

var questions = [
		{
		question: "What does HTML stand for?",
		answer: "Hyper Text Markup Language",
		difficulty: 1
		}
	];

console.log(questions);
var question1 = 
		{
		question: "What does HTML stand for?",
		answer: "Hyper Text Markup Language",
		difficulty: 1,
		}
questions.push(question1);
console.log(questions);
for(i=0; i<questions.length;i++){
	console.log(questions[i].questions)
	}

// Constuctor!!!!!!

function ClassQuizItem(parameter1,parameter2,parameter3){
	this.question = parameter1;
	this.answer = parameter2;
	this.difficulty = parameter3;
}

var question = new ClassQuizItem("What does HTML stand for?", "Hyper Text Markup Language", 1);
// new means we're about to make a construcor
// a new ClassQuizItem
var questionArray = [];
questionArray.push(new ClassQuizItem("question1", "answer", "difficulty"));
questionArray.push(new ClassQuizItem("question2", "answer", "difficulty"));
questionArray.push(new ClassQuizItem("question3", "answer", "difficulty"));
questionArray.push(new ClassQuizItem("question4", "answer", "difficulty"));
questionArray.push(new ClassQuizItem("question5", "answer", "difficulty"));
questionArray.push(new ClassQuizItem("question6", "answer", "difficulty"));
questionArray.push(new ClassQuizItem("question7", "answer", "difficulty"));
questionArray.push(new ClassQuizItem("question8", "answer", "difficulty"));
questionArray.push(new ClassQuizItem("question9", "answer", "difficulty"));
console.log(questionArray);

// for(i=0; i<questionArray.length; i++){
// 	var rand = (Math.floor(Math.random *questionArray.length));
// 	var rand2 = (Math.floor(Math.random *theClass.length));
// 	document.getElementById("question-text").innerHTML = questionArray[rand].question + "," + theClass[rand2];
// }

function AddressBookItem(name,email,address, address2, city, state, zip, phone, website){
	this.name = name;
	this.email = email;
	this.address = address;
	this. address2 =address2;
	this.city = city;
	this.state = state;
	this.zip = zip;
	this.phone = phone;
	this.website = website
}

console.log(AddressBookItem);

var willsAddress = new AddressBookItem(
	"Will",
	"Willyb15@gmail.com",
	"2823 Dover Road"
	);

// A constuctor for a business that has plans for websites
function Plan()(name, price, space, transer, pages,){
	this.name = name;
	this.price = price;
	this.space = space;
	this.transfer = transfer;
	this.pages = pages;
}

var plan1 = new Plan("Basic", 99, 100, 1000, 10);
var plan2 = new Plan("Premium", 199, 500, 5000, 50);
var plan3 = new Plan("Diamond", 299, 1000, 2000, 500);


