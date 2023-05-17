import {sendEmail} from "../../app/api/utils/form-action/emailService"


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only post request allowed" });
  }
  try {
    sendEmail(req);
    return res.status(200).json({ message: "Contact Email Sent Successfully" });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ message: errorMessage });
  }
}
