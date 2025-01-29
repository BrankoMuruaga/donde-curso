"use client";

import Clock from "@icons/Clock";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Select from "@components/Select";
import { horas, institutos } from "@lib/data";

function SearchForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new window.FormData(e.target as HTMLFormElement);
    const params = new URLSearchParams(
      Array.from(formData.entries()).map(([key, value]) => [
        key,
        value.toString(),
      ])
    ).toString();

    // Actualizar la URL con los parámetros de búsqueda
    if (params.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(params)}`);
    }
  };

  useEffect(() => {
    disableEndTimeOptions();
  }, []);

  return (
    <section className="size-auto mx-auto w-[50rem] my-10 rounded-xl bg-[var(--neutral-background)] p-4 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl font-semibold"></h1>
      <form
        onSubmit={handleSubmit}
        id="horaryForm"
        className="flex flex-col gap-4"
      >
        <Select
          label=""
          options={institutos}
          defaultOption="Instituto a buscar"
          defaultValue={""}
          required
          id="typematch[]"
          name="typematch[]"
          className="w-[30rem] cursor-pointer border border-gray-300 text-sm rounded-lg block p-2.5 text-[var(--neutral-900)]"
        />

        <div className="flex gap-4 justify-center">
          <div className="flex flex-col gap-2">
            <label htmlFor="from_date">Seleccione una fecha</label>
            <input
              defaultValue={""}
              type="date"
              id="from_date"
              name="from_date"
              className="p-2 rounded-lg cursor-pointer text-[var(--neutral-900)]"
              required
            />
          </div>

          <div>
            <span className="flex gap-4 items-center mb-2">
              <label htmlFor="start_time">Seleccione un horario</label>
              <Clock className="size-5" />
            </span>
            <div id="horary" className="flex gap-0">
              <Select
                defaultOption="Desde"
                options={horas}
                defaultValue={""}
                required
                id="start_time"
                name="start_time"
                className="cursor-pointer border-gray-300 text-gray-900 text-sm rounded-s-lg block w-full p-2.5"
              />
              <Select
                defaultOption="Hasta"
                options={horas}
                required
                defaultValue={""}
                id="end_time"
                name="end_time"
                className="cursor-pointer border-gray-300 text-gray-900 text-sm rounded-r-lg block w-full p-2.5"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="m-auto w-32 border-2 border-[var(--action-color)] px-7 py-2 rounded-lg text-[var(--font-color)]"
        >
          Buscar
        </button>
      </form>
    </section>
  );
}

export default SearchForm;

function disableEndTimeOptions() {
  const start_time = document.getElementById("start_time");

  // deshabilitar las opciones de end_time que sean menores a start_time
  start_time?.addEventListener("change", (event) => {
    const end_time = document.getElementById("end_time") as HTMLSelectElement;
    const selectedStartTime = (event.target as HTMLSelectElement).value;

    Array.from(end_time.options).forEach((option) => {
      option.disabled = option.value <= selectedStartTime;
    });

    if (end_time.value <= selectedStartTime) {
      end_time.value = "";
    }
  });
}
