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
}
