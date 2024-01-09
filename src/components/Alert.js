import React from 'react'
import './Alert.css'
export default function Alert(props) {
  const Cap = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return (
    <div style={{ fontSize: '1.4rem' }} className='al mb-2'>
      {props.alert && <div style={{ padding: '1.3rem' }} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Cap(props.alert.type)}</strong>:{props.alert.msg}
      </div>}
    </div>

  )
}
