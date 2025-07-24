/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class FavqService {
  constructor(private readonly http: HttpService) {}

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
    console.log('Searching for quote:', query);
    const { data } = await firstValueFrom(
      this.http.get(`/quotes/?filter=${query}`),
    );

    if (!data || !data.quotes) {
      throw new Error('No quotes found');
    }

    return data.quotes;
  }
}
