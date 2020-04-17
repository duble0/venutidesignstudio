//index.js  
function sendEmail() {
	Email.send({
				Token : "2857c539-a94d-4b30-a15f-18fd410a3dcf"
				To : '<v.f.d@outlook.it>',
				Name : "<sender’s name>",
				From : "<sender’s email address>",
				Subject : "<email subject>",
				Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}