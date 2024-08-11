import React, { useState } from 'react';

const ImageGallery = ({ links }) => {
    const [closedIndices, setClosedIndices] = useState([]);
    const handleClick = (index) =>{
        setClosedIndices([...closedIndices, index]);
    }
    console.log(closedIndices);
    return (
      <>
      {links.map((link, index)=>(
          closedIndices.includes(index) ? "" : (<div>
            <div class="image">
              <img src={link}/>
              <button class="remove" onClick={()=>{
              handleClick(index);
                }}>X</button>
              </div>
            </div>)
  
        ))}
      </>
    );
  }

  export default ImageGallery;