import nodemailer from "nodemailer"


export const sendPasswordResetEmail = async (email:string, message:string) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        service: process.env.SMTP_SERVICE,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: "Password reset!",
        html: message
    }

    await transporter.sendMail(mailOptions)
}



export const sendResetSuccessEmail = async (email:string) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        service: process.env.SMTP_SERVICE,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: "Password reset done!",
        html: "Password reset done!"
    }

    await transporter.sendMail(mailOptions)
}


export const sendVerificationEmail = async (email:string,token:string) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        service: process.env.SMTP_SERVICE,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: "Verify your account!",
        html: token
    }

    await transporter.sendMail(mailOptions)
}

export const sendWelcomeEmail = async (email:string,user:string) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        service: process.env.SMTP_SERVICE,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: "Welcome to foodie!",
        html: `hi,${user}! You are welcome to foodie!`
    }

    await transporter.sendMail(mailOptions)
}