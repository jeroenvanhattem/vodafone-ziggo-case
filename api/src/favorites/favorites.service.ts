import { Injectable } from '@nestjs/common';
import { FavoritesRepository } from './favorites.repository';

@Injectable()
export class FavoritesService {
  constructor(private readonly favoritesRepository: FavoritesRepository) {}

  getLikedQuotes() {
    return this.favoritesRepository.findAllLikedQuotes();
  }

  createLikedQuote(quote: CreateQuoteDto) {
    return this.favoritesRepository.createLikedQuote(quote);
  }

  deleteLikedQuote(id: number) {
    return this.favoritesRepository.deleteLikedQuote(id);
  }
}
