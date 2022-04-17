import { Apartment, Hotel, People, Sports, Train } from '@material-ui/icons'
import './whyus.css'

const WhyUs = () => {
  return (
    <div className='whyus_container' >
        <h2>Why Choose Us</h2>
      
      <div className="cards">

        <div className="card">
            <Apartment className='card_icon'/>
            <h4>School Vision</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui magni reprehenderit corrupti natus maxime ratione tempore facilis sequi iure velit!</p>
        </div>
        <div className="card">
            <Hotel className='card_icon'/>
            <h4>Full Boarding</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui magni reprehenderit corrupti natus maxime ratione tempore facilis sequi iure velit!</p>
        </div>
        <div className="card">
            <Sports className='card_icon'/>
            <h4>Quality Sport Facility</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui magni reprehenderit corrupti natus maxime ratione tempore facilis sequi iure velit!</p>
        </div>
        <div className="card">
            <People className='card_icon'/>
            <h4>Experienced Stuff</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui magni reprehenderit corrupti natus maxime ratione tempore facilis sequi iure velit!</p>
        </div>
        <div className="card">
            <Train className='card_icon'/>
            <h4>Best Transport Automobiles</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui magni reprehenderit corrupti natus maxime ratione tempore facilis sequi iure velit!</p>
        </div>
    </div>
    </div>
  )
}

export default WhyUs