import * as cheerio from "cheerio";

export const getSessionCookies = async () => {
  const endpoint =
    "http://dondecurso.unahur.edu.ar/reservas2k/web/classroom_horary.php";

  const response = await fetch(endpoint);
  const html = await response.text();

  const $ = cheerio.load(html);

  const csrfToken = $('input[name="csrf_token"]').val();

  const cookies = response.headers.get("set-cookie");

  const cookieArray = cookies.split(";");
  const sessionCookiePair = cookieArray.find((cookie) =>
    cookie.trim().startsWith("MRBS_SESSID=")
  );

  return {
    csrfToken: csrfToken,
    sessionCookies: sessionCookiePair.split("=")[1],
  };
};
