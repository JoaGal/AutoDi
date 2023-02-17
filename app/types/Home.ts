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
