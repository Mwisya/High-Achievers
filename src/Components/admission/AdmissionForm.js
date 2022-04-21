import './admissionform.css'
import { useState } from 'react'

const AdmissionForm = () => {
  const[parent ,setParent]= useState("")
  const[child ,setChild]= useState("")
  const[school ,setSchool]= useState("")
  const[date ,setDate]= useState("")
  const[male ,setMale]= useState("")
  const[female ,setFemale]= useState("")

  function submit(e) {
     e.preventDefault();
     
     setParent("")
     setChild("")
     setSchool("")
     setDate("")
     setMale("")
     setFemale("")
   }
  return (
    <section className='form_section'>
      
      <div className="form_container">
        <article>
        <h3>OUR REGISTRA</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestias fugiat quas voluptate blanditiis atque, necessitatibus dicta eligendi repudiandae, exercitationem maxime in nulla eum optio corporis alias vel magnam! Odio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione magni, eligendi sunt nihil omnis odit veniam optio quasi consequuntur soluta inventore odio.
        </article>
        <form onSubmit={submit}>
          <h3>Fill in Details</h3>
            <input type="text" value={parent} onChange={(e)=> setParent(e.target.value) } placeholder='Parent name' />
            <input type="text" value={child} onChange={(e)=> setChild(e.target.value)} placeholder='Childs name' />
            <input type="date" value={date}  placeholder='D.O.B' onChange={(e)=> setDate(e.target.value)}  />
            <input type="text" value={school} onChange={(e)=> setSchool(e.target.value)} placeholder='Previous school' />
            <div className='checkbox'>
              <label htmlFor="male">
                <input type="checkbox"  className='checkbox_input' name="male" id="male" value={male} onChange={(e)=> setMale(e.target.value)} />Male
              </label>
              <label htmlFor="female">
                <input type="checkbox" className='checkbox_input' name="female" id="female" value={female} onChange={(e)=> setFemale(e.target.value)}/>Female
              </label>
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>

    </section>
  )
}

export default AdmissionForm