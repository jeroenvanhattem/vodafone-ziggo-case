export interface QuoteType {
  author: string;
  author_permalink: string;
  body: string;
  dialogue: boolean;
  downvotes_count: number;
  favorites_count: number;
  id: number;
  internalId?: number;
  isFavorite?: boolean;
  private: boolean;
  tags: string[];
  upvotes_count: number;
  url: string;
}
