import { Controller, Get, Param } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get('/random')
  getRandomQuote() {
    return this.quotesService.getRandomQuote();
  }

  @Get('/search/:query')
  search(@Param('query') query: string) {
    return this.quotesService.searchQuote(query);
  }
}
