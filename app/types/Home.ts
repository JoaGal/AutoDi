export interface ClientInfo {
    age: number | string;
    weight: number | string;
    waist: number | string;
    height: number | string;
    hip: number | string;
    chest: number | string;
    activity: string;
  }

export interface InputHome {
    title: string;
    extent: string;
    pathObject: number | string ;
    name: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
  };