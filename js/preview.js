var loadFile = function(event){
	var output = document.getElementById('pic');
	output.src = URL.createObjectURL(event.target.files[0]);
};