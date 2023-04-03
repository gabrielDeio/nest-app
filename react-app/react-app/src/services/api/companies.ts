import { ICompany } from "../../interfaces/ICompany";
import { BASE_URL } from "./api";

const url = BASE_URL + "/companies";

export const companiesServices = {
    postCompany : async (body : ICompany) => {
        const request = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
    },

    getCompany : async (params : string) => {
        const request = await fetch(`${url}/${params}`, {
            method : 'GET',
        })
    },

    getAllCompanies :async () : Promise<ICompany[]> => {
        const response = await fetch(url, {
            method : 'GET'
        })

        
        return await response.json();
    },
    
    updateCompany : async(params : string, body : ICompany) =>{
        const response = await fetch(`${url}/${params}`, {
            method:'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
    },

    deleteCompany : async(params : string) => {
        const response = await fetch(`${url}/${params}` , {
            method:'DELETE'
        })
    }
}