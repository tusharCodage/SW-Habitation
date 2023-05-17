import sendgrid from "@sendgrid/mail";
import { NextApiRequest } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function sendEmail(req: NextApiRequest) {
  const { fullName, email, message, role } = req?.body;
  const data = {
    fullName: fullName,
    email: email,
    message: message,
    role: role,
  };

  var html = `<div>
  <h2>SW Habitation PopUp Form</h2>
  <h3>FullName:${data?.fullName}</h3>
  <h3>Email:${data?.email}</h3>
  </div>`;

  if (data?.message) {
    html = `<div>
    <h2>SW Habitation ContactUs Form</h2>
    <h3>FullName:${data?.fullName}</h3>
    <h3>Email:${data?.email}</h3>
    <h3>Message:${data?.message}</h3>
    </div>`;
  }

  const emaildata = {
    to: "info@codagehabitation.com",
    from: "info@codagehabitation.com",
    subject: "Information mail",
    html,
  };
  // const emaildata = {
  //   to: "yashk.codage@gmail.com",
  //   from: "yashk.codage@gmail.com",
  //   subject: "Information mail",
  //   html,
  // };
  
 
  // if (emaildata) {
  //   emaildata.html === "";
  //   return;
  // }
  try {
    const res = await sendgrid.send(emaildata);
  } catch (error) {
    // throw new Error("Email could not be sent, Please try again later");
  }
}
export { sendEmail };
