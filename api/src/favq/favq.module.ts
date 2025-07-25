import { HttpModule } from '@nestjs/axios';
import { FavqService } from './favq.service';
import { forwardRef, Global, Module } from '@nestjs/common';
import { FavoritesService } from 'src/favorites/favorites.service';
import { FavoritesModule } from 'src/favorites/favorites.module';

@Global()
@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://favqs.com/api',
      headers: {
        Authorization: `Token ${process.env.FAVQS_API_KEY}`,
      },
    }),
    forwardRef(() => FavoritesModule),
  ],
  providers: [FavqService],
  exports: [FavqService],
})
export class FavqModule {}
