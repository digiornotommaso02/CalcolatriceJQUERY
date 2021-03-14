$(document).ready(function(){
	$('#PrimoBottone').click(function(){
		var formula = $('#uno').val();
		var postData = {
			"expr": [formula],
			"precision": 14
		};
		$.ajax({
			url: 'https://api.mathjs.org/v4/',
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify(postData),
			success: function( data, textStatus, jQxhr){
				$("#risultato1").html(data.result[0]);
			},
			error: function( jqXhr, textStatus, errorThrown ){
				console.log( errorThrown );
			}
		});
	});
});


function SenzaJquery(){
	var formula = document.getElementById('due').value;
	var postData = {
		"expr": [formula],
		"precision": 14
	};
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'https://api.mathjs.org/v4/', true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
			var responseData = JSON.parse(xhr.response);
			document.getElementById('risultato2').innerHTML = responseData.result[0];
		}
	}
	xhr.send(JSON.stringify(postData));
}