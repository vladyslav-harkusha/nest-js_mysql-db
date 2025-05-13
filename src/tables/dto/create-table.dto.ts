import {
    IsString,
    IsNumber,
    MinLength,
    MaxLength,
    Min,
    Max,
    IsOptional,
} from 'class-validator';

export class CreateTableDto {
    @IsString()
    @MinLength(2)
    @MaxLength(255)
    type: string;

    @IsNumber()
    @Min(10)
    @Max(1_000_000)
    width: number;

    @IsNumber()
    @Min(10)
    @Max(1_000_000)
    height: number;

    @IsOptional()
    inStock: boolean;
}
