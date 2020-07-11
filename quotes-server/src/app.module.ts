import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose'
import { QuotesModule } from './quotes/quotes.module';
import { LoggerMiddleware } from './shared/middlewares/logger.middleware';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://test:test123456@cluster0.4qlvp.mongodb.net/quotes?retryWrites=true&w=majority'), QuotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer:MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes('quotes')
  }
}
