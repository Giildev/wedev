const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const smtpTransport = require("nodemailer-smtp-transport");

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "mailerbitoraclessandbox@gmail.com",
      pass: "bitsandbox"
    }
  })
);

router.post("/send", (req, res, next) => {
  const email = req.body.email;

  const mail = {
    from: "wedev",
    to: "giildev.exe@gmail.com", //Change to email address that you want to receive messages on
    subject: "Someone has register on WEDEV",
    text: email
  };

  console.log(mail);
  transporter.sendMail(mail, (err, data) => {
    console.log("err", err);
    console.log("data", data);
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

module.exports = router;
