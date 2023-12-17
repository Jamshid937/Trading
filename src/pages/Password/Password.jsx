import React from 'react'

import http from '../../server/http/index'
import { useRef } from 'react'
import { useState } from 'react'
import'./index.css'
const Password = (props) => {
  const [hasError , sethasError] = useState(false)
const loginInput = useRef(null)
const passInput = useRef(null)


const onForsubmit = (e) => {
  console.log(loginInput.current.value, passInput.current.value);
  e.preventDefault()
http.post( 'login' , {
 email: loginInput.current.value,
 password: passInput.current.value
})
.then((res) => {
  props.settoken(res.data.token)
  window.localStorage.setItem('token', res.data.token)
})
.catch(() => {
sethasError(true)
})
}

  return (
    <div className='form_container'>
    <div className='form'>
      <form onSubmit={onForsubmit}>
        {
         hasError ? (
          <div className='alert alert-danger'>error</div>
          ) : (
            <></>
            )
        }
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" ref={loginInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input ref={passInput} type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div></div>
  )
}

export default Password