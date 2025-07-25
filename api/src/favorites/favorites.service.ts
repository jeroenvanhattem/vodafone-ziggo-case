import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { FavoritesRepository } from './favorites.repository';
import { FavqService } from 'src/favq/favq.service';

@Injectable()
export class FavoritesService {
  constructor(
    private readonly favoritesRepository: FavoritesRepository,
    @Inject(forwardRef(() => FavqService)) // Circular dependency handling
    private readonly favqService: FavqService,
  ) {}

  async getLikedQuotes() {
    const likedQuotes = await this.favoritesRepository.findAllLikedQuotes();

    if (likedQuotes.length === 0) {
      return [];
    }

    const quotes = await Promise.all(
      likedQuotes.map(async (quote) => {
        const favqQuote = await this.favqService.getQuote(quote.quoteId);
        return { ...favqQuote, isFavorite: true, internalId: quote.id };
      }),
    );

    return quotes;
  }

  createLikedQuote(quote: CreateQuoteDto) {
    return this.favoritesRepository.createLikedQuote(quote);
  }

  deleteLikedQuote(id: number) {
    return this.favoritesRepository.deleteLikedQuote(id);
  }

  findQuoteById(id: number) {
    return this.favoritesRepository.findQuoteById(id);
  }
}
