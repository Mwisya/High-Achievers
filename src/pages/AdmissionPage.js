import React from 'react'
import AdmissionForm from '../Components/admission/AdmissionForm'
import { Admission, Footer, Header } from '../Components/Index'

const AdmissionPage = () => {
  return (
    <div>
        <Header/>
        <Admission/>
        <AdmissionForm/>
        <Footer/>
    </div>
  )
}

export default AdmissionPage