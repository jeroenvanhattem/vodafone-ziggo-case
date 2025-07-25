import { Injectable } from '@nestjs/common';
import { FavqService } from 'src/favq/favq.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoritesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllLikedQuotes() {
    return this.prismaService.likedQuotes.findMany();
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

  async findQuoteById(id: number) {
    const likedQuote = await this.prismaService.likedQuotes.findFirst({
      where: { quoteId: id },
    });

    if (!likedQuote) {
      return null;
    }

    return likedQuote;
  }
}
