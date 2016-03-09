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

var questions = 
[
	{
		question: "What is HTML?",
		answer: "Hpyer Text Markup Language",
		difficulty: 1
	},
	{
		question: "What is a CSS selector?",
		answer: "String that identiefies the elements to which a particular declaration or a set of declaration will apply.",
		difficulty: 3	
	}
];

var question1 = 	
	{
		question: "What is HTML?",
		answer: "Hpyer Text Markup Language",
		difficulty: 1
	};
questions.push(question1);	
var question2 = 	
	{
		question: "What is HTML?",
		answer: "Hpyer Text Markup Language",
		difficulty: 1
	};
questions.push(question1);	

// console.log(questions);
for(i=0; i<questions.length; i++){
	console.log(questions[i].question);
}

// CONSTRUCTOR!!!!

function ClassQuizItem(parameter1, parameter2, parameter3){
	this.question = parameter1;
	this.answer = parameter2;
	this.difficulty = parameter3;
}

// var question = new ClassQuizItem("WHat does HTML stand for?", "Hyper Text Markup Langauge", 1);
// console.log(question.answer);
var questionArray = [];
questionArray.push(new ClassQuizItem('What does HTML stand for?','HyperTextMarkupLanguage',1));
questionArray.push(new ClassQuizItem('What does HTML stand for?','HyperTextMarkupLanguage',1));
questionArray.push(new ClassQuizItem('What does HTML stand for?','HyperTextMarkupLanguage',1));
questionArray.push(new ClassQuizItem('What does HTML stand for?','HyperTextMarkupLanguage',1));
questionArray.push(new ClassQuizItem('What does HTML stand for?','HyperTextMarkupLanguage',1));
questionArray.push(new ClassQuizItem('What does HTML stand for?','HyperTextMarkupLanguage',1));
questionArray.push(new ClassQuizItem('What does HTML stand for?','HyperTextMarkupLanguage',1));
questionArray.push(new ClassQuizItem('What does HTML stand for?','HyperTextMarkupLanguage',1));
questionArray.push(new ClassQuizItem('What does HTML stand for?','HyperTextMarkupLanguage',1));
questionArray.push(new ClassQuizItem('What does HTML stand for?','HyperTextMarkupLanguage',1));
questionArray.push(new ClassQuizItem('What does HTML stand for?','HyperTextMarkupLanguage',1));



questionArray.push(new ClassQuizItem('Question2','answer','difficulty'));
questionArray.push(new ClassQuizItem('Question3','answer','difficulty'));
questionArray.push(new ClassQuizItem('Question4','answer','difficulty'));
questionArray.push(new ClassQuizItem('Question5','answer','difficulty'));
questionArray.push(new ClassQuizItem('Question6','answer','difficulty'));
questionArray.push(new ClassQuizItem('Question7','answer','difficulty'));
questionArray.push(new ClassQuizItem('Question8','answer','difficulty'));
questionArray.push(new ClassQuizItem('Question9','answer','difficulty'));
questionArray.push(new ClassQuizItem('Question10','answer','difficulty'));
questionArray.push(new ClassQuizItem('Question11','answer','difficulty'));
console.log(questionArray);

// for(i=0; i<questionArray.length; i++){
	var rand = Math.floor(Math.random() * questionArray.length);
	var rand2 = Math.floor(Math.random() * theClass.length);
	document.getElementById('question-text').innerHTML = questionArray[rand].question + ', ' + theClass[rand2];
// }


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



Status API Training Shop Blog About Pricing
© 2016 GitHub, Inc. Terms Privacy Security Contact Help