import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = req.cookies;
  const sessionCookies = cookies.MRBS_SESSID;
  const csrfToken = cookies.CSRF_TOKEN;

  if (!sessionCookies || !csrfToken) {
    return res.status(401).json({ message: "Session or CSRF token not found" });
  }

  // Aquí puedes usar las cookies como necesites
  res.status(200).json({ sessionCookies, csrfToken });
}
