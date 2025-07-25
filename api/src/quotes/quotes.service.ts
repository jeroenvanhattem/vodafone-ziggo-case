import { Injectable } from '@nestjs/common';
import { FavoritesService } from 'src/favorites/favorites.service';
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
