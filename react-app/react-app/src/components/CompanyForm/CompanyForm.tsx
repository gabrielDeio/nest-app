import { Fragment, useEffect, useState } from "react";
import { CompanyFormType } from "../../enums/companyFormType";
import { CompanyProps } from "../../interfaces/comapanyProps";
import { ICompany } from "../../interfaces/ICompany";
import { companiesServices } from "../../services/api/companies";
import './companyForm.css';

export function CompanyForm({ type, company }: CompanyProps) {
    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [adress, setAdress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [edit, setEdit] = useState(false);


    useEffect(() => {
        const editForm  = document.getElementById('edit-form') as HTMLFormElement;
        const name = editForm.elements.item(0) as HTMLInputElement;
        const cnpj = editForm.elements.item(1) as HTMLInputElement;
        const adress = editForm.elements.item(2) as HTMLInputElement;
        const phoneNumber = editForm.elements.item(3) as HTMLInputElement;
        
        if(company) {
            name.value = company.name;
            cnpj.value = company.cnpj;
            adress.value = company.adress;
            phoneNumber.value = company.phoneNumber;
        }
    }, [company])

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }


    const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCnpj(e.currentTarget.value);
    }


    const handleAdressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdress(e.currentTarget.value);
    }


    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.currentTarget.value);
    }

    const handleCreateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.item(0) as HTMLInputElement;
        const cnpj = form.elements.item(1) as HTMLInputElement;
        const adress = form.elements.item(2) as HTMLInputElement;
        const phoneNumber = form.elements.item(3) as HTMLInputElement;

        const company: ICompany = {
            name: name.value,
            cnpj: cnpj.value,
            adress: adress.value,
            phoneNumber: phoneNumber.value
        }

        //console.log(company);

        companiesServices.postCompany(company);
    }

    const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.item(0) as HTMLInputElement;
        const cnpj = form.elements.item(1) as HTMLInputElement;
        const adress = form.elements.item(2) as HTMLInputElement;
        const phoneNumber = form.elements.item(3) as HTMLInputElement;

        const company: ICompany = {
            name: name.value,
            cnpj: cnpj.value,
            adress: adress.value,
            phoneNumber: phoneNumber.value
        }

        //console.log(company);

        companiesServices.updateCompany(company.cnpj, company);
        handleEditClick();
    }

    const handleEditClick = () => {
        setEdit(!edit);
    }


    if (type === CompanyFormType.create) {
        return (
            <Fragment>
                <form onSubmit={handleCreateSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={handleNameChange} /><br />
                    </label>
                    <label>
                        CNPJ:
                        <input type="text" name="cnpj" onChange={handleCnpjChange} /><br />
                    </label>
                    <label>
                        Adress:
                        <input type="text" name="adress" onChange={handleAdressChange} /><br />
                    </label>
                    <label>
                        Phone number:
                        <input type="text" name="phoneNumber" onChange={handlePhoneNumberChange} /><br />
                    </label>

                    <input type="submit" value="submit" />
                </form>
            </Fragment>
        )
    }
    else {
        return (
            <Fragment>
                <form onSubmit={handleEditSubmit} id="edit-form">
                    <label>
                        Name:
                        <input type="text" name="name" onChange={handleNameChange} disabled={!edit} /><br />
                    </label>
                    <label>
                        CNPJ:
                        <input type="text" name="cnpj" onChange={handleCnpjChange} disabled={!edit} /><br />
                    </label>
                    <label>
                        Adress:
                        <input type="text" name="adress" onChange={handleAdressChange} disabled={!edit} /><br />
                    </label>
                    <label>
                        Phone number:
                        <input type="text" name="phoneNumber" onChange={handlePhoneNumberChange} disabled={!edit} /><br />
                    </label>

                    <input type="submit" value="submit" disabled={!edit} />
                    <button onClick={handleEditClick} >Edit</button>
                </form>
            </Fragment>
        )
    }

}