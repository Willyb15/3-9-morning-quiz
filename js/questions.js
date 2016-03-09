var theClass = [
	'Tristan',
	'Joshua',
	'Bogdan',
	'Laz',
	'Rock Man',
	'Will',
	'Curtis',
	'Joe',
	'Koshan',
	'Patrick',
	'The Handsome One',
	'Jeremy'
];

var questionArray = [
		{
		question: "What does HTML stand for?",
		answer: "Hyper Text Markup Language",
		difficulty: 1
		},
	{
		question: "What does CSS stand for?",
		answer: "Cascading Style Sheets",
		difficulty: 1
	},
	{
		question: "What does JSON stand for?",
		answer: "JavaScipt Object notation",
		difficulty: 2
	},
	{
		question: "What is CSS padding?",
		answer: "The padding properties set the size of the white space between the element content and the element border.",
		difficulty: 3
	},
	{
		question: "What does JSON stand for?",
		answer: "JavaScipt Object notation",
		difficulty: 2
	},
	{
		question: "What is the difference between id and class in HTML?",
		answer: "A document can have multiple elements with the same class, but not with the same ID. An Identifier must be specific to a certain element within a document",
		difficulty: 3
	},
	{
		question: "What is the DOM?",
		answer: "The Document Object Model,DOM, is a programming API for HTML documents. Defines the logical structure of documents and the way a document is accessed and manipulated.",
		difficulty: 2
	},
	{
		question: "What is the border-box in CSS?",
		answer: "The width and height properties includes content, padding and border, but not margin",
		difficulty: 3
	},
	{
			question: "JavaScript was originally developed in May 1995 by Brendan Eich, while working for which company?",
		answer: "Netscape Communications Corporation",
		difficulty: 5
	},
	{
		question: "What are the latest versions of HTML and CSS?",
		answer: "5 and 3 respectively.",
		difficulty: 3
	}
	];
	
	console.log(questionArray);
	var students = ["Tristan",
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
	
	console.log(students);

console.log(questionArray[0], students[3]);
questionArray.push(question1);	
var question1 = 	
	{
		question: "What is HTML?",
		answer: "Hpyer Text Markup Language",
		difficulty: 1
	};
questionArray.push(question1);	

// console.log(questions);
// for(i=0; i<questions.length; i++){
// 	console.log(questions[i].question);
// }

// CONSTRUCTOR!!!!

function ClassQuizItem(parameter1, parameter2, parameter3){
	this.question = parameter1;
	this.answer = parameter2;
	this.difficulty = parameter3;
}

// var question = new ClassQuizItem("WHat does HTML stand for?", "Hyper Text Markup Langauge", 1);
// console.log(question.answer);
var newQuestionArray = [];
newQuestionArray.push(new ClassQuizItem('What does the comment syntax look like in CSS?','/* this is a comment */',2));
newQuestionArray.push(new ClassQuizItem('What does CSS stand for?','Cascading Style Sheets',1));
newQuestionArray.push(new ClassQuizItem('What does JSON stand for?','JavaScipt Object notation',2));
newQuestionArray.push(new ClassQuizItem('What is CSS padding?','The padding properties set the size of the white space between the element content and the element border.',3));
newQuestionArray.push(new ClassQuizItem('What is the difference between id and class in HTML?','A document can have multiple elements with the same class, but not with the same ID. An Identifier must be specific to a certain element within a document',2));
newQuestionArray.push(new ClassQuizItem('What is the DOM?','The Document Object Model,DOM,is a programming API for HTML documents. Defines the logical structure of documents and the way a document is accessed and manipulated.',3));
newQuestionArray.push(new ClassQuizItem('What is the border-box in CSS??','The width and height properties includes content, padding and border, but not margin',4));
newQuestionArray.push(new ClassQuizItem('JavaScript was originally developed in May 1995 by Brendan Eich, while working for which company?','Netscape Communications Corporation',4));
newQuestionArray.push(new ClassQuizItem('What are the latest versions of HTML and CSS?','3 and 5 respectively.',2));
newQuestionArray.push(new ClassQuizItem('What is an element in HTML?','An HTML element is an individual component of an HTML document or web page, once this has been parsed into the Document Object Model.', 1));
newQuestionArray.push(new ClassQuizItem('What is a <form> in HTML?','HTML forms are used to collect user input.',2));



// questionArray.push(new ClassQuizItem('Question2','answer','difficulty'));
// questionArray.push(new ClassQuizItem('Question3','answer','difficulty'));
// questionArray.push(new ClassQuizItem('Question4','answer','difficulty'));
// questionArray.push(new ClassQuizItem('Question5','answer','difficulty'));
// questionArray.push(new ClassQuizItem('Question6','answer','difficulty'));
// questionArray.push(new ClassQuizItem('Question7','answer','difficulty'));
// questionArray.push(new ClassQuizItem('Question8','answer','difficulty'));
// questionArray.push(new ClassQuizItem('Question9','answer','difficulty'));
// questionArray.push(new ClassQuizItem('Question10','answer','difficulty'));
// questionArray.push(new ClassQuizItem('Question11','answer','difficulty'));
// console.log(questionArray);


function generateQuestion(){
	for(i=0; i<newQuestionArray.length; i++){
	var rand = Math.floor(Math.random() * newQuestionArray.length);
	var rand2 = Math.floor(Math.random() * theClass.length);
	document.getElementById('question-text').innerHTML = newQuestionArray[rand].question + ' , ' + theClass[rand2];
	}
}


function AddressBookItem(name, email, address, address2, city, state, zip, phone, website){
	this.name = name;
	this.email = email;
	this.address = address;
	this.address2 = address2;
	this.city = city;
	this.state = state;
	this.zip = zip;
	this.phone = phone;
	this.website = website;
}

var robsAddress = new AddressBookItem(
	'Rob',
	'rob@digitalcrafts.com',
	'223 Cherry Tree Lane',
	'London',
	'UK',
	'CK236',
	'900-callmenow',
	'www.digitalcrats.com'
)

// console.log(robsAddress);

//A constructor for a buisness that has plans for web sites


function Plan(name, price, space, transfer, pages, discountMonths){
	this.name = name;
	this.price = price;
	this.space = space;
	this.transfer = transfer;
	this.pages = pages;
	this.discountMonths = discountMonths;
}

Plan.prototype.profit = 'Yes';

Plan.prototype.calcAnnual = function(percentIfDisc){
		var bestPrice = this.price;
		var currDate = new Date();
		var currMonth = currDate.getMonth();
		for(i=0; i< this.discountMonths.length; i++){
			if(this.discountMonths[i] == currMonth){
				bestPrice = this.price * percentIfDisc;
				break;
			}
		}
		return bestPrice * 12;
};

var plan1 = new Plan("Basic", 99, 100, 1000, 10, [0,1]);
var plan2 = new Plan("Premium", 199, 500, 5000, 50, [2,3]);
var plan3 = new Plan("Diamond", 299, 1000, 2000, 500, [4,5]);





console.log(plan1);
console.log(plan2);
console.log(plan3);
