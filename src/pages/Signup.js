import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return ( 
            
         <div className="row justify-content-center">
         <div className="col-12 col-md-8 col-sm-10 col-xl-6 my-5">
            <div className="card p-3 pt-5 p-lg-5">
               <h1 className="text-center text-primary mb-2 font-bold">Create an Account</h1>
               <p className="text-muted text-center mb-1">Create a Schoolable account.</p>
           
               <form  className="mt-5">
                  <div className="form-row">
                     <div className="col-12 col-md-6 mb-4"><label className="font-semi-bold">First Name</label><input type="text" placeholder="First Name" required="required" className="form-control" /></div>
                     <div className="col-12 col-md-6 mb-4"><label className="font-semi-bold">Last Name</label><input type="text" placeholder="Last Name" required="required" className="form-control" /></div>
                  </div>
                  <div className="form-row">
                     <div className="col-12 mb-4"><label className="font-semi-bold">Email Address</label><input type="email" placeholder="Email address" required="required" className="form-control" /></div>
                  </div>
                  <div className="form-row">
                     <div className="col-12 mb-4">
                        <label className="font-semi-bold">Password</label>
                        <div className="input-group input-group-merge">
                           <input placeholder="Enter your password" required="required" type="password" className="form-control form-control-appended" />
                           
                        </div>
                     </div>
                  </div>
                  <div className="form-row">
                     <div className="col-12 mb-4"><label className="font-semi-bold">Phone Number</label><input type="text" placeholder="Phone number" required="required" className="form-control" /></div>
                  </div>
                                  
                  <div className="form-group">
                     <button type="submit" className="btn btn-primary btn-block">
                     
                        Register
                     </button>
                  </div>
                  <div className="text-center"><small className="text-muted text-center">
                     Already have an account?
                     <a href="/login" className="text-hyperlink">Log in</a>.
                     </small>
                  </div>
               </form>
            </div>
         </div>
      </div>
  
        )
    }
}