import React from 'react'
import ProductHead from './ProductHead'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <ProductHead head="Account" data="Account" />

      <div className="py-5">
        <div className="text-center py-5">
          <h3 className='fw-bolder'>Login</h3>
          <p>Please login using account detail bellow.</p>
          <form action="/" className='w-50 m-auto'>
            <input type="email" name="email" id="email" placeholder='Email' className='form-control p-3 my-4' />
            <input type="password" name="password" id="password" placeholder='Password' className='form-control p-3 my-4' />
            <div className='d-flex'>
              <button className="btn col-lg-3 text-light d-block py-3 px-5 text-capitalize rounded-0 mt-3"
                style={{ "background-color": "#f8796c" }}>Sign In</button>
              <Link className='col-lg-9 text-decoration-none text-dark text-end align-self-center'>Create account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login