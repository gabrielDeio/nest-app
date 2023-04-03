import { CompanyFormType } from "../enums/companyFormType";
import { ICompany } from "./ICompany";

export interface CompanyProps{
    type : CompanyFormType,
    company ?: ICompany
}