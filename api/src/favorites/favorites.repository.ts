import { Injectable } from '@nestjs/common';
import { FavqService } from 'src/favq/favq.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoritesRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly favqService: FavqService,
  ) {}

  async findAllLikedQuotes() {
    const likedQuotes = await this.prismaService.likedQuotes.findMany();

    if (likedQuotes.length === 0) {
      return [];
    }

    const quotes = await Promise.all(
      likedQuotes.map(async (quote) => {
        const favqQuote = await this.favqService.getQuote(quote.quoteId);
        return favqQuote;
      }),
    );

    return quotes;
  }

  async createLikedQuote(quote: CreateQuoteDto) {
    return this.prismaService.likedQuotes.create({
      data: {
        quoteId: quote.id,
      },
    });
  }

  async deleteLikedQuote(id: number) {
    return this.prismaService.likedQuotes.delete({
      where: {
        id,
      },
    });
  }
}
