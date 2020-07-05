import { News2Item } from "./news2-item";

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: News2Item[];
}
