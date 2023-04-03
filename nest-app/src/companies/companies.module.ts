import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CompanyService } from './companies.service';
import { CompanyController } from './company.controller';
import { companyProviders } from './company.providers';

@Module({
    imports : [DatabaseModule],
    providers : [
        ...companyProviders,
        CompanyService
    ],
    controllers : [CompanyController]
})
export class CompaniesModule {}
