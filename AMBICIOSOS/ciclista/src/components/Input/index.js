import { useEffect, useState } from 'react';
import './styles.css';

export default function Input({ type, label, input, placeholder, onChange, helperText, showError }) {
  const [error, setError] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [externalHelperText, setExternalHelperText] = useState('')

  const handleShowError = () => {
    setExternalHelperText('')
    setError(false)
  }
  useEffect(()=>{
    if (helperText && helperText.length > 0) {
      setError(true)
      setExternalHelperText(helperText)
    }
  },[helperText])
  return(
    <div className='input-container'>
      <label>{ label }</label>
      <input style={{borderColor:error?'red':'inherit', borderWidth:error?'2px':'0px'}} value={inputValue} min='1' onFocus={handleShowError} type={ type || 'text' } placeholder={ placeholder } onChange={ (e) => {setInputValue(e.target.value);onChange(e.target.value)} } />
      {externalHelperText.length > 0 && <p>{label} {externalHelperText}</p>}
    </div>
  );
}