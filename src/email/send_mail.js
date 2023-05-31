const nodemailer = require("nodemailer");

async function main(req, res) {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "sanketgupte20@gmail.com",
            pass: "evehqbunxdpfeycd",
        },
    });

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <sanketgupte20@gmail.com>',
        to: "sushantamin81@gmail.com, prathamdhumal678@gmail.com",
        subject: "For Testing",
        // text: "Hello Bro",
        html: "<i>Hello world?</i>",
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.send("Hello");
   
}
main().catch(console.error);


module.exports = {
    main: main
}