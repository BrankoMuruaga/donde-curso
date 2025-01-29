import { HoraryData, HoraryResponse } from "@src/types";
import { cookies } from "next/headers";
import * as cheerio from "cheerio";
import * as React from "react";

/**
 * Obtiene las cookies necesarias para la autenticación.
 * @returns {Promise<{ sessionCookies: string, csrfToken: string }>}
 * @throws {Error} Si no se encuentran las cookies.
 */
export async function getAuthCookies() {
  const cookieStore = cookies();
  const sessionCookies = (await cookieStore).get("MRBS_SESSID")?.value;
  const csrfToken = (await cookieStore).get("CSRF_TOKEN")?.value;

  if (!sessionCookies || !csrfToken) {
    throw new Error("Session or CSRF token not found");
  }

  return { sessionCookies, csrfToken };
}

/**
 * Construye el cuerpo de la solicitud para fetchHorary.
 * @param {string} csrfToken - El token CSRF.
 * @param {string} query - El término de búsqueda.
 * @returns {string} - El cuerpo de la solicitud en formato URLSearchParams.
 */
export function buildRequestBody(csrfToken: string, query: string): string {
  const body = new URLSearchParams({
    csrf_token: csrfToken,
    phase: "2",
  }).toString();

  return `${body}&${query}`;
}

/**
 * Extrae la información de horarios del HTML proporcionado.
 *
 * @param html - La cadena HTML que contiene los datos de horarios.
 * @returns Un objeto que contiene el número de entradas encontradas y los datos de horarios extraídos.
 */
export function extraerHorariosDeHTML(html: string): HoraryResponse {
  const $ = cheerio.load(html);
  const nEntries = parseInt($("#n_entries").text(), 10);

  const rows = $("#classroom_horary_table tbody tr");

  const data: HoraryData[] = [];

  rows.each((_i, row) => {
    const cols = $(row).find("td");
    const record = {
      codigo: $(cols[0]).text().trim(),
      actividad: $(cols[1]).text().trim(),
      comision: $(cols[2]).text().trim(),
      docente: $(cols[3]).text().trim(),
      desde: $(cols[4]).text().trim(),
      hasta: $(cols[5]).text().trim(),
      espacio: $(cols[6]).text().trim(),
      edificio: $(cols[7]).text().trim(),
    };
    data.push(record);
  });

  const result: HoraryResponse = {
    registrosEncontrados: nEntries,
    datos: data,
  };
  return result;
}

export const repeat = (times: number, element: React.JSX.Element) => {
  return Array.from({ length: times }, (_, index) => (
    <React.Fragment key={index}>{element}</React.Fragment>
  ));
};
