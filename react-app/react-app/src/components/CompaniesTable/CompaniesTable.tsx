import { Fragment, useEffect, useState } from "react";
import { CompanyFormType } from "../../enums/companyFormType";
import { ICompany } from "../../interfaces/ICompany";
import { companiesServices } from "../../services/api/companies";
import { CompanyForm } from "../CompanyForm/CompanyForm";
import './companiesTable.css';


export function CompaniesTable() {
    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [companyToEdit, setCompanyToEdit] = useState<ICompany>({cnpj : '', name : '', adress : '', phoneNumber : ''});

    useEffect(() => {
        getAllCompanies().then((response) => {
            setCompanies(response);
        });

    }, [])

    const getAllCompanies = async (): Promise<Array<ICompany>> => {
        const response = await companiesServices.getAllCompanies();

        return response;
    }

    const handleLinkClick = (e : React.FormEvent<HTMLElement>) =>{
        e.preventDefault();
        setCompanyToEdit(companies[Number(e.currentTarget.id)]);
    }

    const handleDeleteClick = (e : React.FormEvent<HTMLElement>) => {
        const company = companies[Number(e.currentTarget.id)];
        companiesServices.deleteCompany(company.cnpj);
    }


    return (
        <Fragment>
            <table>
                <tr>
                    <th>Name</th>
                </tr>
                {companies.map((item, index) => <tr key={index}><td key={index}>
                    <a href="" onClick={handleLinkClick} id={index as unknown as string} >{item.name}</a>
                    <button onClick={handleDeleteClick}>Delete</button>
                </td></tr>)}
            </table>
            <div>
                <CompanyForm type={CompanyFormType.edit} company={companyToEdit}/>
            </div>
        </Fragment>
    );
}