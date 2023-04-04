import { IsNotEmpty, IsString } from "class-validator";

export class CreateCompanyDto{
    @IsNotEmpty()
    cnpj : string;
    @IsString()
    adress : string;
    @IsString()
    name : string;
    @IsString()
    phoneNumber : string;
}

export class UpdateCompanyDto {
    cnpj : string;
    adress : string;
    name : string;
    phoneNumber : string;
}