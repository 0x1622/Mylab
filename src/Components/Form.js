import React from 'react'

export default function Form() {
  return (
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="badge text-bg-primary">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="badge text-bg-info">We'll never share your email with anyone else.</div>
  </div>



  <div className="mb-3">
    <label for="exampleInputPassword1" className="badge text-bg-primary">Password</label>
    <input type="password" className="form-control" row="8" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" row="9" >Submit</button>
  


   

</form>
  )
}
