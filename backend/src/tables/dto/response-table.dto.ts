import { ApiProperty } from '@nestjs/swagger';

export class ResponseTableDto {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'metal' })
    type: string;

    @ApiProperty({ example: 50 })
    width: number;

    @ApiProperty({ example: 40 })
    height: number;

    @ApiProperty({ example: false })
    inStock: boolean;
}
