window.onload = showImages;


function showImages(){
	var imgIndex1 = Math.round(Math.random() * 14);
	document.getElementById("randomImage1").src = "usethese/angry/" + "angry" + imgIndex1 + ".jpg";
}