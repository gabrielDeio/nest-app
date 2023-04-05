import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, UseFilters } from "@nestjs/common";
import { CreateCompanyDto, UpdateCompanyDto } from "./dto/create-company.dto";
import { CompanyService } from "./companies.service";
import { Company } from "./company.entity";


@Controller('companies')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

    @Post()
    async create(@Body() createCompanyDto: CreateCompanyDto) {
        this.companyService.create(createCompanyDto);
    }

    @Get()
    async findAllCompanies(): Promise<Company[]> {
        return this.companyService.findAll();
    }

    @Get(':cnpj')
    async findCompanyByCnpj(@Param('cnpj') cnpj: string): Promise<Company> {
        return this.companyService.findCompanyByCnpj(cnpj);
    }

    @Patch(':cnpj')
    async updateCompany(@Param('cnpj') cnpj: string, @Body() updateCompanyDto: UpdateCompanyDto) {

        this.companyService.update(updateCompanyDto, cnpj);
    }

    @Delete(':cnpj')
    async deleteCompany(@Param('cnpj') cnpj: string) {
        this.companyService.delete(cnpj);
    }
}
