const nodemailer = require('nodemailer');
const express = require('express');
const app = express()
require('dotenv').config()

app.get('/enviar', async(req,res)=>{
    const transport = nodemailer.createTransport({
        host:'smtp-mail.outlook.com',
        port:process.env.PORT,
        secure: false,
        auth:{
            user:process.env.USER,
            pass:process.env.PASSWORD,
        },
    })
    try {
        const email = await transport.sendMail({
            from:process.env.USER,
            to:process.env.USER,
            subject: 'nova',
            html:`<h1>Uma nova mensagem para vc meu jovem</h1>`,
            text: 'texto alternativo' 
        })
    
        res.send(email)
        
    } catch (error) {
        console.log(error);
    }
})

app.listen(4000,()=>{
    console.log('servidor na porta http://localhost:4000');
})
