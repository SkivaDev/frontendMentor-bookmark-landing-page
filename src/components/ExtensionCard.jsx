import React from 'react'

function ExtensionCard({title, description, imageUrl, buttonText, width, height }) {
  return (
    <div>
      <div>
        <img src={imageUrl} alt="" width={width} height={height}/>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>......</div>
      <button>{buttonText}</button>
    </div>
  )
}

export default ExtensionCard