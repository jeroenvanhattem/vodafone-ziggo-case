import { forwardRef, Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { FavoritesRepository } from './favorites.repository';
import { FavqModule } from 'src/favq/favq.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [forwardRef(() => FavqModule)],
  providers: [FavoritesService, FavoritesRepository, PrismaService],
  controllers: [FavoritesController],
  exports: [FavoritesService],
})
export class FavoritesModule {}
