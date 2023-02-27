import { ClientInfo } from "./Home";

export interface ResultFinal {
    finalKcal : number;
    object: string | number | readonly string[] | undefined;
    carb: number;
    prot: number;
    fat: number;
    divisorCarb: number;
    divisorProt: number;
    divisorFat: number;
  }

export interface ResultCardsDiet {
    handleChangeInput: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleChangeSelect: React.ChangeEventHandler<HTMLSelectElement> | undefined;
    clientInfo: ClientInfo;
    handleDivisor: React.ChangeEventHandler<HTMLInputElement>;
    finalKcal : number;
    object: string | number | readonly string[] | undefined;
    carb: number;
    prot: number;
    fat: number;
    divisorCarb: number;
    divisorProt: number;
    divisorFat: number;
    }