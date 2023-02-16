export interface ClientInfo {
  age: number | string;
  weight: number | string;
  waist: number | string;
  height: number | string;
  hip: number | string;
  chest: number | string;
  activity: number | string;
}

export interface InputHome {
  title: string;
  extent: string;
  pathObject: number | string;
  name: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface SelectHome {
  pathObject: number | string;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}
