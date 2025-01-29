import { NextRequest, NextResponse } from "next/server";
import { getSessionCookies } from "@services/getSessionCookies";

const COOKIE_OPTIONS = {
  httpOnly: false,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * 7, // 1 semana
};

// Función para establecer cookies de sesión y CSRF
const setAuthCookies = (
  response: NextResponse,
  sessionId: string,
  csrfToken: string
) => {
  response.cookies.set({
    name: "MRBS_SESSID",
    value: sessionId,
    ...COOKIE_OPTIONS,
  });
  response.cookies.set({
    name: "CSRF_TOKEN",
    value: csrfToken,
    ...COOKIE_OPTIONS,
  });
};

// Middleware principal
export async function middleware(req: NextRequest) {
  // if (req.nextUrl.pathname === "/search") {
  //   return NextResponse.rewrite(new URL("/", req.url));
  // }

  const cookies = req.cookies;
  const hasSessionCookie = cookies.has("MRBS_SESSID");
  const hasCsrfCookie = cookies.has("CSRF_TOKEN");

  // Si las cookies ya existen, continuar con la solicitud
  if (hasSessionCookie && hasCsrfCookie) {
    return NextResponse.next();
  }

  // Obtener nuevas cookies si no existen
  try {
    const { sessionCookies, csrfToken } = await getSessionCookies();

    if (sessionCookies && csrfToken) {
      const response = NextResponse.next();
      setAuthCookies(response, sessionCookies, csrfToken.toString());
      return response;
    }

    return NextResponse.error();
  } catch (error) {
    console.error("Error al obtener cookies:", error);
    return NextResponse.error();
  }
}

// Aplicar el middleware a todas las rutas
export const config = {
  matcher: ["/:path*"],
};
