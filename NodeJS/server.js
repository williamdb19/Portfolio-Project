// modules =================================================
var dotenv = require('dotenv');
var express = require('express');
var path = require('path');
var http = require('http');
var nodeMail = require('nodemailer');
var bodyParser = require('body-parser');
var ejs = require('ejs');


var app = express();

dotenv.config();
console.log(dotenv);
console.log(dotenv.config());

//app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// set our port
const port = 3000;

app.use(express.static("express"));
app.use(express.static(path.join(__dirname + "express")));

//Function for creating email connection and sending mail
//from contact form
//async function mainMail(name, email, subject, message) {
//  try {
//      const transporter = await nodeMail.createTransport({
//        host: 'smtp.gmail.com',
//        secure: true,
//        service: 'gmail',
//        auth: {
//          type: "OAUTH2",
//          user: process.env.GMAIL_USERNAME,  //set these in your .env file
//          clientId: process.env.OAUTH_CLIENT_ID,
//          clientSecret: process.env.OAUTH_CLIENT_SECRET,
//          refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//          accessToken: process.env.OAUTH_ACCESS_TOKEN,
//          expires: 3599
//        },
//      });
//      const mailOption = {
//        from: process.env.GMAIL_USER,
//        to: "wdelbarrio19@gmail.com",
//        subject: subject,
//        html: `You got a message from
//        Email : ${email} \n
//        Name: ${name} \n
//        Message: ${message}`,
//      };
//    await transporter.sendMail(mailOption);
//    return Promise.resolve("Message Sent Successfully!");
//  } catch (error) {
//    return Promise.reject(error);
//  }
//}


//Setting initial route
app.get("/", function (req, res) {
    console.log("get /");
    res.sendFile(path.join(__dirname + "/express/HTML/index.html"));
});

//app.get("/contact", function (req, res) {
//    console.log("get /contact");
//    res.sendFile(path.join(__dirname + "/express/HTML/contact-form.html"));
//});

//app.post("/contact", async (req, res, next) => {
//  const { yourname, youremail, yoursubject, yourmessage } = req.body;
////  await console.log(res.body);
////  await console.log(req.body);
//  var errorMessage = "";
//
//  try {
//        await mainMail(yourname, youremail, yoursubject, yourmessage);
//
//  } catch (error) {
//        console.log(error);
//        errorMessage = error;
//  }
//
//  const data = errorMessage;
//  ejs.renderFile(path.join(__dirname + "/express/HTML/contact-form.html"), data, (err, str) => {
//      if (err) {
//        console.log(err);
//        res.status(500).send('An error occurred');
//      } else {
//        res.send(str);
//      }
//  });
//
//});

// startup our app at http://localhost:3000
app.listen(port, function(err){
    if(err) console.log("Error in server setup");
    console.log("Server listening on Port",port);
});