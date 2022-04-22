import { Email } from '@material-ui/icons'
import './admission.css'

const Admission = () => {
  
  return (
    <div className='admission'>
        <h3>Admission 2022</h3>
        <a href="mailto:katula.jnr@gmail.com" target="_blank" rel="noopener noreferrer"><Email className='email-icon'/> email@gmail.com</a>
    </div>
  )
}

export default Admission