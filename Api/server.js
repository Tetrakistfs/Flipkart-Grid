var bodyParser = require("body-parser");
var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

(path = require("path")),
  (nodeMailer = require("nodemailer")),
  (bodyParser = require("body-parser"));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 5000;
app.get("/", function (req, res) {
  res.render("index");
});
app.post("/send-email", function (req, res) {
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "xxx@xx.com",
      pass: "xxxx",
    },
  });
  let mailOptions = {
    from: '"Krunal Lathiya" <xx@gmail.com>', // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.body, // plain text body
    html: "<b>NodeJS Email Tutorial</b>", // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
    res.render("index");
  });
});
app.listen(port, function () {
  console.log("Server is running at port: ", port);
});
