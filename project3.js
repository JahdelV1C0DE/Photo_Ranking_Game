"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Jahdel White
      Date:   9/16/23

      Filename: project05-02.js
*/


//created variables that reference html tags and elements
let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

//created a for loop that iterates through all items in the images collection
for (let i = 0; i < images.length; i++){
	//runs function when an image has been clicked
	images[i].onclick = function() {
		
		
		//if parent id is equal to photobucket then each time a photo is clicked the number will appear
		if (this.parentElement.id === "photo_bucket"){
			let newItem = document.createElement("li");
			photoList.appendChild(newItem);
			newItem.appendChild(this)
	
	} else {
		let oldItem = this.parentElement;
		photoBucket.appendChild(this);
		oldItem.parentElement.removeChild(oldItem);
		
		
	}
}
}
	

