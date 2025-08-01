//these are the notes for chapter 5

//I find this better for notes because then I can actually get used to typing
//certain commands as opposed to writing them out in a notebook

//Chapter 5 Nodes


//appending child to a parent Node

lblimages.appendChild(lblImages.firstElementChild);

//moving backwards through a list of Nodes
node.insertBefore(new, child);


//creating a copy of a node
node.cloneNode(deep);
//deep is a boolean value that if true copies all a node and all decendants


if (timeID) {
	window.clearInterval(timeID); 
	timeID = undefined;

} else {
	showNext(); timeID = window.setInterval(showNext, 1500); 
}
//The if condition is true only if timeID has a truthy (defined) value and the slideshow is running. 
//The if statement clears the timed command and sets timeID back to undefined; otherwise the slideshow is 
//not running and the else condition starts the slideshow by running the showNext() function and storing the id of the timed command.

//system dialog boxes 
response = window.confirm(message);

//To create a new browser window, apply the following 
window.open() method: window.open(url, title, options, replace)
//where url is the location of the file displayed in the window, title is the window’s title, 
//options is a comma-separated list of features defining the window’s appearance, and replace is an optional 
//Boolean value that specifies whether url should create a new entry in the window’s history list (true)
 //or replace the existing entry (false). You can include all or none of the arguments for 
 //the window.open() method.

//removing a node

node.removeChild(old);

//CREATING AND APPEDNING Nodes

lightBox.appendChild(lbCounter);
lbCounter.id = "lbCounter";

//how to make text Nodes
lightBox.appendChild(lbTitle);
lbTitle.id = "lbTitle";
lbTitle.textContent = lightboxTitle;

//placing a node anywhere besides the end

node.insertBefore(new, child);

//running time commands
timeVar = window.setInterval(command, interval);

//time delay commands
let timeVar = window.setTimeout(command, delay);

//writing content to a browser window

let newWin = window.open("", "slideshow", "width=500, height=300"); 
let mainHeading = document.createElement("h1"); 
mainHeading.textContent = "My Slideshow"; 
newWin.document.body.appendChild(mainHeading);

// how to create n element node

const newDiv = document.createElement('div');

// You can set attributes for the element if needed
newDiv.setAttribute('id', 'myDiv');
newDiv.setAttribute('class', 'myClass');

// You can also set the element's innerHTML or textContent
newDiv.innerHTML = '<p>This is a new div element!</p>';
// Or you can set the text content directly
// newDiv.textContent = 'This is a new div element!';

// Append the new element to an existing element on your page
const container = document.getElementById('container'); // Assuming you have an element with the id "container"
container.appendChild(newDiv);
