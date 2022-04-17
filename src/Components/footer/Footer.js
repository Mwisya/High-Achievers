import { Email, Facebook, Instagram, LocationOn, Star, WhatsApp } from '@material-ui/icons'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
          <div className='quick-links'>
            <h4>Quick Links</h4>
            <p> <Star/> Request Visit</p>
            <p><Star/>School policy</p>
            <p><Star/>Student portal</p>
            <p><Star/>Parent portal</p>
            <p><Star/>Covid-19 response</p>
          </div>
          <div className='social-media'>
              <div className='footer_logo'>
                <h1>HAsc</h1>
                <h5 className="footer_motto">River of Exellence</h5>
              </div>
              <div className='social_media-icons'>
                <a href="mailto:HAsc@gmail.com"><Email/></a>
                <a href="http://"><WhatsApp/></a>
                <a href="http://"><Instagram/></a>
                <a href="http://"><Facebook/></a>
              </div>
          </div>
          <div className='contact_details'>
            <h4>Contact Details</h4>
            <p><LocationOn className='contact_detail-icon'/> Mombasa </p>
            <p><Email className='contact_detail-icon'/> HAsc@gmail.com </p>
          </div>
      </div>
    </footer>
  )
}

export default Footer