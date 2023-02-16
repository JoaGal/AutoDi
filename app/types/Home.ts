export interface ClientInfo {
  age: string;
  weight:  string;
  waist:  string;
  height:  string;
  hip:  string;
  chest:  string;
  activity:  string;
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
