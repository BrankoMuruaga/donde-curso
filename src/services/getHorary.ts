import { extraerHorariosDeHTML } from "@lib/utils";

export const fetchHorary = async (cookies: string, body: string) => {
  const endpoint =
    "http://dondecurso.unahur.edu.ar/reservas2k/web/classroom_horary.php";

  const html = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      cookie: `MRBS_SESSID=${cookies}`,
    },
    body,
  }).then((response) => response.text());

  const result = extraerHorariosDeHTML(html);

  return result;
};
