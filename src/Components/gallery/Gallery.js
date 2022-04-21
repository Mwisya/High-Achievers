import './gallery.css'
import {data} from "./data"

const Gallery = () => {
  return (
    <div className='gallery gallery_modifier'>
      <h2>Facility Gallery</h2>
      <div className="gallery_container">
        {data.map(item=>(
          <div key={item.id}>
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery