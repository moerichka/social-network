import React from 'react'

import s from './Input.module.scss'

function Input({ placeholder = "", label = "", value, onChange, className = "", variant }) {
  const  inputClassName = `${s.label} ${className} ${s[variant]}`

  return (
    <label className={inputClassName}>
      {label}
      <input
        type="text"
        className={s.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default Input