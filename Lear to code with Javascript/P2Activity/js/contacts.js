/* 
Activity: Contact manager
*/

// TODO: Complete the program
console.log("Welcome to your contacts manager !")

function presentChoices(){
	console.log("1: List contacts")
	console.log("2: Add contact")
	console.log("0: Quit")
}

// Create a new Array to store all the contacts and a Object to create the contacts
var contacts = new Array();
function Contact(firstName, lastName){
	this.firstName 	= firstName;
	this.lastName 	= lastName;
}
Contact.prototype.describe = function(){
	var description = "Last name : " + this.lastName + ", first name : " + this.firstName;
	return description;
}
// Creation of the two firsts contacts
var johnDoe = new Contact("John", "Doe"); 
var janeDoe = new Contact("Jane", "Doe"); 
contacts.push(johnDoe);
contacts.push(janeDoe);

// Program
function contactsProgram(){
	presentChoices();
	var valeur = "";
	valeur = prompt('Enter a number between 0 and 2 :');
	while(valeur !== "0"){
		if(valeur > 2 || valeur < 0){
			console.log("You can't write this, number.")
			presentChoices();
			valeur = prompt('Enter a number between 0 and 2 :');
		}else if (valeur === "1"){
			console.log("Here's the list of all your contacts :");
			contacts.forEach(function(contact){
				console.log(contact.describe());
			});
			presentChoices();
			valeur = prompt('Enter a number between 0 and 2 :');
		}else if(valeur === "2"){
			var addFirst = prompt("Add the First Name");
			var addLast = prompt("Add the Last Name");
			var addContact = new Contact(addFirst, addLast);
			contacts.push(addContact);
			console.log("Contact added");
			presentChoices();
			valeur = prompt('Enter a number between 0 and 2 :');
		}
	}
	console.log("Reload the page to have access to the little program.")
}

contactsProgram();


