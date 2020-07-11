import { Module } from '@nestjs/common';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuoteSchema } from './schema/quote.schema';

@Module({
    imports: [MongooseModule.forFeature([{name:'Quote',schema:QuoteSchema}]),],
    controllers:[QuotesController],
    providers:[QuotesService]
})
export class QuotesModule {}
