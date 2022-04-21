import { Email, Facebook, Instagram, LocationOn, Star, WhatsApp } from '@material-ui/icons'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
          <div className='quick_links'>
            <h4>Quick Links</h4>
            <p> <Star className='quick_links-icon'/> Request Visit</p>
            <p><Star className='quick_links-icon'/>School policy</p>
            <p><Star className='quick_links-icon'/>Student portal</p>
            <p><Star className='quick_links-icon'/>Parent portal</p>
            <p><Star className='quick_links-icon'/>Covid-19 response</p>
          </div>
          <div className='social-media'>
              <div className='footer_logo'>
                <h1>HAsc</h1>
                <h5 className="footer_motto">River of Exellence</h5>
              </div>
              <div className='social_media-icons'>
                <a href="mailto:HAsc@gmail.com" className='icon_color'><Email/></a>
                <a href="http://" className='icon_color'><WhatsApp/></a>
                <a href="http://" className='icon_color'><Instagram/></a>
                <a href="http://" className='icon_color'><Facebook/></a>
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