import { Dispatch } from "react";

export interface IResponse {
  id: number;
  fixed: boolean;
  title: string;
  severity: string;
  ip_address: string;
  cvss: number | null;
  publication_date: string | null;
  hostname: string;
}

export interface IVunerabilities {
  vunerabilities: IResponse[];
  setEndPointFilter: Dispatch<React.SetStateAction<string>>;
  endPointFilter: string;
}

export interface IPagination {
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  listSize: number;
}

export interface ISearch {
  setEndPointFilter: Dispatch<React.SetStateAction<string>>;
}
