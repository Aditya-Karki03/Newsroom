export interface IError {
  error: string;
  errorCode: string;
}

interface INews {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IAllSportsInitialState {
  allSportsNewsLoading: boolean;
  allSportsNewsSuccess: boolean;
  allSportsNewsFail: boolean;
  allSportsNewsError: IError | null;
  allSportsNewsData: INews[] | [];
}

export interface IAllSportsNewsData {
  status: string;
  totalResults: number;
  articles: INews[];
}

export interface IAllSportsNewsApiResponse {
  data: {
    status: string;
    totalResults: number;
    articles: INews[];
  };
}

export interface INotification {
  description: string;
}

export interface INewsDataCard {
  loading: boolean;
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}
