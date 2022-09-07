/// Stats counter ///
const express = require('express');
const request = require('request');
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));


app.use(express.static(path.join(__dirname, "public")));

  

app.post('/', function(req, res){   
    var Name = req.body.name;
    var email = req.body.email;
    var number = req.body.number;
    var message = req.body.message;
  //  console.log(Name, number, email, message);

    var textBody = `FROM: ${req.body.name} EMAIL: ${req.body.email} NUMBER: ${req.body.number} MESSAGE: ${req.body.message}`;
	var htmlBody = `<h2>Mail From Contact Form</h2><p>from: ${req.body.name} <a href="mailto:${req.body.email}">${request.body.email}</a></p><p>${req.body.message}</p>`;
	var mail = {
		from: Name, 
		to: "fatimashahid007@gmail.com", 
		subject: "Mail From Contact Form", 
		text: textBody,
		html: htmlBody
	};
    console.log(mail);
 
});

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000, function(){
    console.log('Server is running at port 3000!');
});
