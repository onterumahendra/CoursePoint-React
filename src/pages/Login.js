import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return ( 
           
            <div className="row justify-content-center">
   <div className="col-12 col-lg-5 col-md-8 col-sm-12 col-xl-5 my-5">
     
      <div className="card pt-5 pb-5 p-lg-4 col-12">
         <h1 className="card-title font-bold text-center mb-3">Please Login</h1>
         <div className="mt-5 mb-5">
            <form>
               <div className="form-group"><label className="font-semi-bold">Email Address</label><input type="email" placeholder="name@address.com" required="required" className="form-control"/></div>
               <div className="form-group">
                  <div className="row">
                     <div className="col"><label className="font-semi-bold">Password</label></div>
                  </div>
                  <div className="input-group input-group-merge">
                     <input placeholder="Enter your password" required="required" type="password" className="form-control " />
                    
                  </div>
               </div>
               <button type="submit" className="btn btn-lg btn-block btn-primary mb-3">Login</button>
               <div className="text-muted text-center mt-5 mb-2"><small>
                  Forgot your password?
                  <a href="/password/forgot" className="text-hyperlink">Reset It</a>.
                  </small>
               </div>
               <div className="text-muted text-center"><small>
                  Don't have an account yet?
                  <a href="/signup" className="text-hyperlink">Sign Up</a>.
                  </small>
               </div>
            </form>
         </div>
         <div className="mt-5 text-center border-top"><small className="text-muted mt-2">
            By logging in, you agree to our
            <a href="" target="_blank" className="text-hyperlink">terms &amp; conditions</a>
            and
            <a href="" target="_blank" className="text-hyperlink">privacy policy</a></small>
         </div>
      </div>
   </div>
</div>
           
        )
    }
}