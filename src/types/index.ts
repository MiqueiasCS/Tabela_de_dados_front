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
