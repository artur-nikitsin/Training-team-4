var loadFile = function(event){
	var output = document.getElementsByClassName('pic')[0];
	output.src = URL.createObjectURL(event.target.files[0]);
};