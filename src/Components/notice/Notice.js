import { Email } from '@material-ui/icons'
import './notice.css'
import { useNavigate } from 'react-router-dom'
 

const Notice = () => {

  const navigate = useNavigate();
  return (
   <div className='notice'>
       <div className="notice_container">
            <div className="logo_container">
              <div className="notice_logo">
                <h1>HAsc</h1>
                <h5 className="notice_motto">River of Exellence</h5>
             </div>
            </div>
            <div className="notice_contacts">
              <div className="left">
                <p>PO BOX 123-23</p>
                <p>Nairobi</p>
                <p className='left_centre'><Email/>email@gmail.com</p>
              </div>
              <div className="right">
                <p>REF: 2022/1/12/n1</p>
                <p>Date 16-2-2022</p>
              </div>
            </div>
            <h2>Internal Memo</h2>
            <article className='notice_article'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa alias et voluptatibus dolores rem fuga magnam, quisquam a totam quod aut est corrupti aperiam consequatur repellat, rerum eligendi nostrum inventore aliquid incidunt voluptatem cupiditate amet perspiciatis. Ut minima qui, ipsam accusamus iusto, consequuntur optio quisquam ratione ipsa molestiae fugit pariatur? Nostrum labore, sequi blanditiis iure facere beatae repellat facilis culpa, fugiat temporibus totam cum est laudantium eos dolore asperiores quae tenetur modi perferendis voluptates voluptatem eaque voluptatum dolor minus? Beatae dolorem quas aperiam corporis suscipit molestiae expedita nam iure debitis, ipsa assumenda consectetur iusto ut repudiandae enim aut. Inventore, odio.</article>

            <div className="signoff">
              <p>Academics Office</p>
              <h5>Mr Abel Green</h5>
            </div>

       </div>
       <button className='navigation-btn' onClick={()=> navigate('/')}>Back</button>

   </div>
  )
}

export default Notice