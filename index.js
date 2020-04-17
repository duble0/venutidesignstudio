//index.js  
function sendEmail() {
	Email.send({
				Host : "in-v3.mailjet.com"
				Username : "b9525b10355e66601d6474ca013716ca",
				Password : "b72593e5f67d238b4285bd3ca4e15e21",
				To : 'v.f.d@outlook.it',
				Name : "<sender’s name>",
				From : "<sender’s email address>",
				Subject : "<email subject>",
				Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}