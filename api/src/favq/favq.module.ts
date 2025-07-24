import { HttpModule } from '@nestjs/axios';
import { FavqService } from './favq.service';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://favqs.com/api',
      headers: {
        Authorization: `Token ${process.env.FAVQS_API_KEY}`,
      },
    }),
  ],
  providers: [FavqService],
  exports: [FavqService],
})
export class FavqModule {}
