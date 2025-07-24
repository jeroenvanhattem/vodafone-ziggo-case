import { Injectable } from '@nestjs/common';
import { QuotesRepository } from './quotes.repository';

@Injectable()
export class QuotesService {
  constructor(private readonly quotesRepository: QuotesRepository) {}

  getLikedQuotes() {
    return this.quotesRepository.findAllLikedQuotes();
  }

  createLikedQuote(quote: CreateQuoteDto) {
    return this.quotesRepository.createLikedQuote(quote);
  }
}
