import { Fragment, useState } from 'react'
import { CompaniesTable } from './components/CompaniesTable/CompaniesTable'
import { CompanyForm } from './components/CompanyForm/CompanyForm'
import './app.css';
import { CompanyFormType } from './enums/companyFormType';

function App() {

  return (
    <Fragment>
      <div className='grid-container'>
        <div>
          <CompanyForm type={CompanyFormType.create} />
        </div>
        <div className='item-2'>
          <CompaniesTable />
      
        </div>
      </div>

    </Fragment>
  )
}

export default App
