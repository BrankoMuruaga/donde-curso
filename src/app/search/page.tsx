import FeedbackText from "@components/FeedbackText";
import TableResults from "@components/TableResults";
import { getAuthCookies, buildRequestBody } from "@lib/utils";
import { fetchHorary } from "@services/getHorary";
import { type HoraryResponse } from "@src/types";

interface SearchParams {
  query: string;
}

export default async function SearchResults({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { query } = await searchParams;

  if (!query) {
    return <FeedbackText text="Ingrese un término de búsqueda" />;
  }

  let horary: HoraryResponse;

  try {
    // Obtener las cookies de autenticación
    const { sessionCookies, csrfToken } = await getAuthCookies();

    // Construir el cuerpo de la solicitud
    const requestBody = buildRequestBody(csrfToken, query);

    // Obtener los datos del horario
    horary = await fetchHorary(sessionCookies, requestBody);
  } catch (error) {
    console.error("Error fetching search results:", error);
    return <FeedbackText text="Error al obtener los resultados de búsqueda" />;
  }

  return (
    <>
      {horary?.registrosEncontrados ? (
        <TableResults data={horary.datos} />
      ) : (
        <FeedbackText text="No se encontraron resultados" />
      )}
    </>
  );
}
