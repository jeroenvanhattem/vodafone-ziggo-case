import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  getLikedQuotes() {
    return this.quotesService.getLikedQuotes();
  }

  @Post()
  create(@Body() createQuoteDto: CreateQuoteDto) {
    return this.quotesService.createLikedQuote(createQuoteDto);
  }
}
