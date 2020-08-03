var orangeRingHeader = document.querySelector(".orange-ring-header");
var oneRingPhone = document.querySelector(".one-ring-phone");
var twoRingPhone = document.querySelector(".two-ring-phone");
var ringPhoneTree  = document.querySelector(".ring-phone-tree");
var boxPhotoTwo = document.querySelector(".box-photo-two");
var boxPhotoTree = document.querySelector(".box-photo-tree");
var circleBetterRelationships = document.querySelector(".circle-better-relationships");
var circleFooter = document.querySelector(".circle-footer ");
var circleFooterTwo = document.querySelector(".circle-footer-two");
var ringRelationshipsLevel = document.querySelector(".ring-relationships-level");
var buttonForm = document.querySelector(".button-form");
var tryForFree = document.querySelector(".try-for-free")




function colorChange(){
	orangeRingHeader.style.border = 23 + "px solid white";
	oneRingPhone.style.border = 2 + "px solid white";
	twoRingPhone.style.border = 2 + "px solid white";
	ringPhoneTree.style.border = 23 + "px solid white";
	boxPhotoTwo.style.border = 2 + "px solid white";
	boxPhotoTree.style.background = "white";
	circleBetterRelationships.style.border = 22 + "px solid white";
	circleFooter.style.border = 2 + "px solid white";
	circleFooterTwo.style.border = 2 + "px solid white";
	ringRelationshipsLevel.style.border = 48 + "px solid white";
}
setInterval(colorChange, 1000)


function reverseColorChange(){
	orangeRingHeader.style.border = 23 + "px solid #f26a36"
	oneRingPhone.style.border = 2 + "px solid #de6a45"
	twoRingPhone.style.border = 2 + "px solid #de6a45"
	ringPhoneTree.style.border = 23 + "px solid #f26a36"
	boxPhotoTwo.style.border = 2 + "px solid #f6ac17"
	boxPhotoTree.style.background = "#5fc5de"
	circleBetterRelationships.style.border = 22 + "px solid #65cbe2"
	circleFooter.style.border = 2 + "px solid #f6b126"
	circleFooterTwo.style.border = 2 + "px solid #f6b126"
	ringRelationshipsLevel.style.border = 48 + "px solid #f26a36";
}
setInterval(reverseColorChange, 3000)


buttonForm.addEventListener("click", function(){
	buttonForm.style.background = "#19efe5"
	buttonForm.style.border = 2 + "px solid #19efe5"
	function reversColorButton(){
		buttonForm.style.background = "#1943ef"
		buttonForm.style.border = 2 + "px solid #1943ef"
	}
	setTimeout(reversColorButton, 200)
})

tryForFree.addEventListener("click", function(){
	tryForFree.style.background = "#19efe5"
		function reversColorButton(){
		tryForFree.style.background = "#26c195"
	}
	setTimeout(reversColorButton, 200)
})
