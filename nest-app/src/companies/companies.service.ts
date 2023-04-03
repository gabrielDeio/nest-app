import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Company } from "./company.entity";
import { CreateCompanyDto, UpdateCompanyDto } from "./dto/create-company.dto";



@Injectable()
export class CompanyService {
    constructor(
        @Inject('COMPANY_REPOSITORY') private readonly companyRepository : Repository<Company>
    ){}

    create(company : CreateCompanyDto){
        const newCompany = this.companyRepository.create(company);
        return this.companyRepository.save(newCompany);
    }

    findAllCompanies(){
        return this.companyRepository.find();
    }

    findCompanyByCnpj(cnpj : string) {
        return this.companyRepository.findOne({where : { cnpj : cnpj}});
    }

    async updateCompany(company : UpdateCompanyDto , cnpj : string){
        const companyToUpdate = await this.companyRepository.findOne({where : {cnpj : cnpj}});

        return this.companyRepository.update(companyToUpdate.id, company);
    }

    async deleteCompany(cnpj : string){
        const companyToDelete = await this.companyRepository.findOne({where : {cnpj : cnpj}});

        return this.companyRepository.delete(companyToDelete.id);
    }
}