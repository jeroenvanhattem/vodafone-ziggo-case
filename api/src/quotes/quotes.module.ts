import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { QuotesRepository } from './quotes.repository';
import { FavqService } from 'src/favq/favq.service';

@Module({
  // imports: [FavqService],
  providers: [QuotesService, QuotesRepository],
  controllers: [QuotesController],
})
export class QuotesModule {}
