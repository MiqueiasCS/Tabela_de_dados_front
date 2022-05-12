import { Dispatch } from "react";

export interface IItens {
  id: number;
  fixed: boolean;
  title: string;
  severity: string;
  ip_address: string;
  cvss: number | null;
  publication_date: string | null;
  hostname: string;
}

export interface IResponse {
  total: number;
  enviados: number;
  itens: IItens[];
}

export interface IVunerabilities {
  currentItens: IItens[];
  setEndPointFilter: Dispatch<React.SetStateAction<string>>;
  endPointFilter: string;
}

export interface IPagination {
  setCurrentApiRequestPage: Dispatch<React.SetStateAction<number>>;
  currentApiRequestPage: number;
  vunerabilities: IResponse;
  setCurrentItens: Dispatch<React.SetStateAction<IItens[]>>;
  currentItens: IItens[];
}

export interface ISearch {
  setEndPointFilter: Dispatch<React.SetStateAction<string>>;
}
