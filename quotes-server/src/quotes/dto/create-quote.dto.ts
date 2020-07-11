import { ApiProperty } from "@nestjs/swagger";

import { ApiPropertyOptional} from '@nestjs/swagger'
export class CreateQuoteDto{
    @ApiPropertyOptional()
    readonly title:string;

    @ApiPropertyOptional()
    readonly author:string;
}