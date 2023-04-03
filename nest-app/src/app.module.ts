import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyController } from './companies/company.controller';
import { typeOrmConfig } from './configs/typeorm.config';
import { CompaniesModule } from './companies/companies.module';
import { CompanyService } from './companies/companies.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), CompaniesModule],
  controllers: [ ],
  providers: [ ],
})
export class AppModule {}
