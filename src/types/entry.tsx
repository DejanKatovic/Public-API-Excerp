export interface ISearchInputs {
  category: string;
}

export interface Entry {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

export interface APIResponse {
  count: number;
  entries: Entry[];
}
