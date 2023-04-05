import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Company } from "./company.entity";
import { CreateCompanyDto, UpdateCompanyDto } from "./dto/create-company.dto";



@Injectable()
export class CompanyService {
    constructor(
        @Inject('COMPANY_REPOSITORY') private readonly companyRepository: Repository<Company>
    ) { }

    async create(company: CreateCompanyDto) {
        const newCompany = this.companyRepository.create(company);
        try {
            const response = await this.findCompanyByCnpj(newCompany.cnpj);

            throw new HttpException('Company already exists', HttpStatus.BAD_REQUEST);
        }
        catch (error) {
            this.companyRepository.save(newCompany);

            return 'sucess';
        }
    }

    findAll() {
        return this.companyRepository.find();
    }

    async findCompanyByCnpj(cnpj: string) {
        const company = await this.companyRepository.findOne({ where: { cnpj: cnpj } });
        console.log(company);
        if (company) return company;
        else {
            throw new HttpException('Company not found', HttpStatus.NOT_FOUND);
        }

    }

    async update(company: UpdateCompanyDto, cnpj: string) {
        const companyToUpdate = await this.companyRepository.findOne({ where: { cnpj: cnpj } });
        if (companyToUpdate) {
            this.companyRepository.update(companyToUpdate.id, company);

            return 'sucess';
        }
        else {
            throw new HttpException('Company not found', HttpStatus.NOT_FOUND);
        }
    }

    async delete(cnpj: string) {
        const companyToDelete = await this.companyRepository.findOne({ where: { cnpj: cnpj } });
        if(companyToDelete){
            this.companyRepository.delete(companyToDelete.id);
            return 'sucess';    
        }
        else{
            throw new HttpException('Company not found', HttpStatus.NOT_FOUND);
        }   
        
    }
}