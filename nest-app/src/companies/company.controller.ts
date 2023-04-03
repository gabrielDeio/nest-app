import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateCompanyDto, UpdateCompanyDto } from "./dto/create-company.dto";
import { CompanyService } from "./companies.service";
import { Company } from "./company.entity";

@Controller('companies')
export class CompanyController {
    constructor(private readonly companyService : CompanyService) {}

    @Post()
    async create(@Body() createCompanyDto : CreateCompanyDto){
        console.log(createCompanyDto);
        this.companyService.create(createCompanyDto);
    }

    @Get()
    async findAllCompanies() : Promise<Company[]> {
        return this.companyService.findAllCompanies();
    }

    @Get(':cnpj')
    async findCompanyByCnpj(@Param('cnpj') cnpj : string) : Promise<Company> {
        return this.companyService.findCompanyByCnpj(cnpj);
    }

    @Patch(':cnpj')
    async updateCompany(@Param('cnpj') cnpj : string, @Body() updateCompanyDto : UpdateCompanyDto){
    
        this.companyService.updateCompany(updateCompanyDto, cnpj);
    }
    
    @Delete(':cnpj')
    async deleteCompany(@Param('cnpj') cnpj : string) {
        this.companyService.deleteCompany(cnpj);
    }
}
