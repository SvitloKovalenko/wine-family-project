import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, message, number } = req.body;
    const chatId = "-880493865";
    const token = "6261939578:AAG-qClmcFRxqxba0gWxXbhWD-Ga4RGTRQg";
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=Name:${name}+Message:${message}+Phone:${number}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Message sent successfully");
        res.status(200).json({ message: "Message sent successfully" });
      })
      .catch((error) => {
        console.error("There was a problem sending the message:", error);
        res
          .status(500)
          .json({ error: "There was a problem sending the message" });
      });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
