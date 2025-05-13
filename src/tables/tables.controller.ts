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
import { ResponseTableDto } from './dto/response-table.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tables')
@Controller('tables')
export class TablesController {
    constructor(private readonly tablesService: TablesService) {}

    @ApiOperation({ summary: 'create new table' })
    @ApiResponse({ status: 201, type: ResponseTableDto })
    @Post()
    async create(@Body() createTableDto: CreateTableDto): Promise<Table> {
        return await this.tablesService.create(createTableDto);
    }

    @ApiOperation({ summary: 'get all tables' })
    @ApiResponse({ status: 200, type: [ResponseTableDto] })
    @Get()
    async findAll(): Promise<Table[]> {
        return await this.tablesService.findAll();
    }

    @ApiOperation({ summary: 'get table by id' })
    @ApiResponse({ status: 200, type: ResponseTableDto })
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Table> {
        return await this.tablesService.findById(+id);
    }

    @ApiOperation({ summary: 'update table by id' })
    @ApiResponse({ status: 200, type: ResponseTableDto })
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateTableDto: UpdateTableDto,
    ): Promise<Table> {
        return await this.tablesService.update(+id, updateTableDto);
    }

    @ApiOperation({ summary: 'delete table by id' })
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return await this.tablesService.delete(+id);
    }
}
