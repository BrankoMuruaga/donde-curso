import { HoraryData } from "@src/types";
import React from "react";

function TableResults({ data }: { data: HoraryData[] }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-5/6 mx-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-[var(--font-color)] uppercase bg-[var(--neutral-background)]">
          <tr>
            <th scope="col" className="px-6 py-3">
              Código
            </th>
            <th scope="col" className="px-6 py-3">
              Actividad
            </th>
            <th scope="col" className="px-6 py-3">
              Comisión
            </th>
            <th scope="col" className="px-6 py-3">
              Docente
            </th>
            <th scope="col" className="px-6 py-3">
              Desde
            </th>
            <th scope="col" className="px-6 py-3">
              Hasta
            </th>
            <th scope="col" className="px-6 py-3">
              Espacio
            </th>
            <th scope="col" className="px-6 py-3">
              Edificio
            </th>
            <th scope="col" className="px-6 py-3">
              Mapa
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((dato, index) => (
            <tr
              className="odd:bg-[var(--neutral-odd)] even:bg-[var(--neutral-even)] hover:bg-[var(--hover-background)] hover:text-[var(--hover-font-color)] border-b dark:border-gray-700 border-gray-200"
              key={index}
            >
              <td className="px-6 py-4">{dato.codigo}</td>
              <td className="px-6 py-4">{dato.actividad}</td>
              <td className="px-6 py-4">{dato.comision}</td>
              <td className="px-6 py-4">{dato.docente}</td>
              <td className="px-6 py-4">{dato.desde}</td>
              <td className="px-6 py-4">{dato.hasta}</td>
              <td className="px-6 py-4">{dato.espacio}</td>
              <td className="px-6 py-4">{dato.edificio}</td>
              <td className="px-6 py-4">
                <a href="#">Ver</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableResults;
