import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';
import { TablesService } from './tables.service';
import { UpdateTableDto } from './dto/update-table.dto';

@Controller('tables')
export class TablesController {
    constructor(private readonly tablesService: TablesService) {}

    @Post()
    async create(@Body() createTableDto: CreateTableDto): Promise<Table> {
        return await this.tablesService.create(createTableDto);
    }

    @Get()
    async findAll(): Promise<Table[]> {
        return await this.tablesService.findAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Table> {
        return await this.tablesService.findById(+id);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateTableDto: UpdateTableDto,
    ): Promise<Table> {
        return await this.tablesService.update(+id, updateTableDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return await this.tablesService.delete(+id);
    }
}
