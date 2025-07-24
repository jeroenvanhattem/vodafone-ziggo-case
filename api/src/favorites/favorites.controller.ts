import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  getAll() {
    return this.favoritesService.getLikedQuotes();
  }

  @Post()
  create(@Body() createQuoteDto: CreateQuoteDto) {
    return this.favoritesService.createLikedQuote(createQuoteDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.favoritesService.deleteLikedQuote(id);
  }
}
