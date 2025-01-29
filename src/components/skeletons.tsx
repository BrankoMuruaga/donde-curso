import { repeat } from "@src/app/lib/utils";

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-[100px] rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none">
      {repeat(
        9,
        <td className="whitespace-nowrap px-3 py-3 mx-auto bg-[var(--neutral-background)]">
          <div className="h-6 w-26 rounded bg-[var(--hover-background)]" />
        </td>
      )}
    </tr>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-5/6 mx-auto mt-4">
      <table className="w-full text-sm text-left animate-pulse">
        <thead className="text-xs text-[var(--font-color)] uppercase bg-[var(--neutral-background)] ">
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
        <tbody>{repeat(3, <TableRowSkeleton />)}</tbody>
      </table>
    </div>
  );
}
