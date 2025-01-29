export interface HoraryData {
  codigo: string;
  actividad: string;
  comision: string;
  docente: string;
  desde: string;
  hasta: string;
  espacio: string;
  edificio: string;
}

export interface HoraryResponse {
  registrosEncontrados: number;
  datos: HoraryData[];
}
export interface SelectProps {
  label?: string;
  options: { value: string; label: string }[];
  defaultOption: string;
  id: string;
  [key: string]: any;
}

export interface Option {
  value: string;
  label: string;
}
