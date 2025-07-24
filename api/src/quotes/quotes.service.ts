import { Injectable } from '@nestjs/common';
import { FavqService } from 'src/favq/favq.service';

@Injectable()
export class QuotesService {
  constructor(private readonly favqService: FavqService) {}

  searchQuote(query: string) {
    return this.favqService.searchQuote(query);
  }

  getRandomQuote() {
    return this.favqService.getRandomQuote();
  }
}
