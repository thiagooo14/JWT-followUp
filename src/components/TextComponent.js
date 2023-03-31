import React, { useState } from 'react'
import './style.css'

const TextComponent = (props) => {
  const [value, setValue] = useState('');

  value && props.changeName(value)
  
  return (
    <textarea
      cols="30"
      rows="10"
      className='encode'
      rest
      type='text'
      name=''
      id=''
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default TextComponent