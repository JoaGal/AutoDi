export interface ClientInfo {
  age: number | string;
  weight: number | string;
  waist: number | string;
  height: number | string;
  neck: number | string;
  hip: number | string;
  activity: number | string;
  kcal: number | string;
  imc: number | string;
  fat: number | string;
}

export interface ResultCards {
  ResultFinal: () => void;
  kcal: string | number;
  imc: string | number;
  fat: string | number;
}

export interface InputHome {
  title: string | undefined;
  extent: string | undefined;
  pathObject: number | string | undefined;
  name: string | undefined;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface SelectHome {
  pathObject: number | string | undefined;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}
