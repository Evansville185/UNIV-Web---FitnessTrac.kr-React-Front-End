import React from 'react'

const InputField = ({ label, name, type, onChange}) => (
   <>
                   <label htmlFor={name}>{label}</label>
                <input 
                    type={type} 
                    name={name} 
                    required
                    className="login-input"
                    onChange={(event) => onChange(event.target.value)} 
                    />
   </>
  )

export default InputField