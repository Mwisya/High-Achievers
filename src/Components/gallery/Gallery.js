import './gallery.css'
import {data} from "./data"
import {useState} from 'react'
import {Close } from '@material-ui/icons';



const Gallery = () => {

  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  
  const getimage = (img)=>{
    setModalImage(img);
    setModal(true);
  }
  
const closemodal = ()=>{
  setModal(false)
}

  return (
    <div className='gallery gallery_modifier'>
      <div className={modal? 'modal open' : 'modal'}>
        <img src={modalImage} alt={modalImage} />
        <Close onClick={closemodal} />
      </div>
      <h2>Facility Gallery</h2>

      <div className="gallery_container">
        {data.map(item=>(
          <div key={item.id} onClick={()=>getimage(item.img)} >
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery