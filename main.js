/* 

Using the form displayed in index.html, create the following functionality using JavaScript. 

If the user tries to submit the form without entering any info, display an error message on the page that tells them all info is required. 
When users submit their first name and favourite colour, display a customized welcome message on the page in a new H1 that includes their name. Change the background colour of the page to their favourite colour. 

*/



//let submitClick = document.getElementsByClassName('submit');

function submitForm(){
	let h1 = document.createElement('h1');
	let body = document.querySelector('body');
	let main = document.querySelector('main');
	let firstname = document.querySelectorAll('input')[0];
	let lastname = document.querySelectorAll('input')[1];
	let favcolor = document.querySelectorAll('input')[2];
	
	if(firstname.value == '' || lastname.value == '' || favcolor.value == '' ){
		alert('Cannot save an field!');
	}
	else{
		h1.appendChild(document.createTextNode('Hello, ' + firstname.value + " " + lastname.value));
		main.appendChild(h1);
	}
}
