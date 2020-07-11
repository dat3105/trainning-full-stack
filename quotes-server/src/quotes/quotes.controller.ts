import { Controller,Get, Post, Body, Param, Put, Delete, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { Quote } from './interfaces/quote.interface';
import { ApiTags, ApiParam} from '@nestjs/swagger'

@ApiTags('quotes')
@Controller('quotes')
export class QuotesController {

    constructor(private quotesService: QuotesService) { }

    @Get()
    getQuotes(): Promise<Quote[]> {
        Logger.log('New Quotes API Request')
        return this.quotesService.getQuotes()
    }

    @Post()
    async createQuotes(@Body() createQuoteDto:CreateQuoteDto):Promise<Quote>{
        try{
            return await this.quotesService.createQuotes(createQuoteDto)
        }catch(err){
            throw new HttpException(err.message,HttpStatus.UNPROCESSABLE_ENTITY)
        }
    }

    @ApiParam({name:'id'})
    @Get(':id')
    getQuote(@Param('id') id):Promise<Quote>{
        Logger.log('New Quotes API Request')
        return this.quotesService.getQuote(id)
    }

    @ApiParam({name:'id'})
    @Put(':id')
    updateQuote(@Param('id') id,@Body() updateQuoteDto:CreateQuoteDto):Promise<Quote>{
        return this.quotesService.updateQuote(id,updateQuoteDto)
    }

    @ApiParam({name:'id'})
    @Delete(':id')
    deleteQuote(@Param('id') id):Promise<any>{
        return this.quotesService.deleteQuote(id)
    }
}
