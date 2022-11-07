function setProperties()
{
	//get the border color and width
	var red_input = document.getElementById("r_input").value;
	var green_input = document.getElementById("g_input").value;
	var blue_input = document.getElementById("b_input").value;
	var width_input = document.getElementById("width_input").value;


	//get the background color
	var red_inputbg = document.getElementById("r_inputbg").value;
	var green_inputbg = document.getElementById("g_inputbg").value;
	var blue_inputbg = document.getElementById("b_inputbg").value;

	//set border color
	document.getElementById("test-box").style.borderColor = "rgb(" + red_input + "," + green_input + "," + blue_input + ")";

	//set border width
	document.getElementById('test-box').style.borderWidth = width_input + "px";

	//set background color
	document.getElementById('test-box').style.backgroundColor = "rgb(" + red_inputbg + "," + green_inputbg + "," + blue_inputbg + ")";

}