import { Controller, Get, Param, Query } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get('/')
  // Query param page and limit can be added for pagination
  getQuotes(@Query('page') page: number = 1) {
    return this.quotesService.getQuotes(page);
  }

  @Get('/random')
  getRandomQuote() {
    return this.quotesService.getRandomQuote();
  }

  @Get('/search/:query')
  search(@Param('query') query: string) {
    return this.quotesService.searchQuote(query);
  }
}
