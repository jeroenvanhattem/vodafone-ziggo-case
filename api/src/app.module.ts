import { Module } from '@nestjs/common';
import { QuotesModule } from './quotes/quotes.module';
import { PrismaModule } from './prisma/prisma.module';
import { FavqModule } from './favq/favq.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [QuotesModule, PrismaModule, FavqModule, FavoritesModule],
})
export class AppModule {}
