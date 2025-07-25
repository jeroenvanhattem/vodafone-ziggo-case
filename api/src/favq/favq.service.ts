import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { FavoritesService } from 'src/favorites/favorites.service';

@Injectable()
export class FavqService {
  constructor(
    private readonly http: HttpService,
    private readonly favoritesService: FavoritesService,
  ) {}

  async getQuotes(page: number) {
    const { data } = await firstValueFrom(
      this.http.get(`/quotes?page=${page}`),
    );

    if (!data || !data.quotes) {
      throw new Error('No quotes found');
    }

    const quotes = await Promise.all(
      data.quotes.map(async (quote: { id: number }) => {
        const liked = await this.favoritesService.findQuoteById(quote.id);
        return { ...quote, isFavorite: !!liked, internalId: liked?.id };
      }),
    );

    return quotes;
  }

  async getQuote(id: number) {
    const { data } = await firstValueFrom(this.http.get(`/quotes/${id}`));

    if (!data || !data) {
      throw new Error('Quote not found');
    }

    return data;
  }

  async getRandomQuote() {
    const { data } = await firstValueFrom(this.http.get('/qotd'));

    if (!data || !data.quote) {
      throw new Error('No random quote found');
    }

    return data.quote;
  }

  async searchQuote(query: string) {
    const { data } = await firstValueFrom(
      this.http.get(`/quotes/?filter=${query}`),
    );

    if (!data || !data.quotes) {
      return null;
    }

    if (data.quotes.length === 1 && data.quotes[0].id === 0) {
      return [];
    }

    const quotes = await Promise.all(
      data.quotes.map(async (quote: { id: number }) => {
        const liked = await this.favoritesService.findQuoteById(quote.id);
        return { ...quote, isFavorite: !!liked, internalId: liked?.id };
      }),
    );

    return quotes;
  }
}
