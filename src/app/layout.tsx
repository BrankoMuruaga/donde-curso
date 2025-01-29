import Navbar from "@components/Navbar";
import SearchForm from "@components/SearchForm";
import "@fontsource-variable/onest";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Donde Curso - UNAHUR",
  description:
    "Web independiente para encontrar tu aula en la Universidad Nacional de Hurlingham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <SearchForm />
        {children}
      </body>
    </html>
  );
}
