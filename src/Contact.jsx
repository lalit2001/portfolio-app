import React from 'react';
import './index.css';

function Contact() {
  return (
    <>
        <div className='my-5'>
            <h1 className='text-center'>Contact us</h1>
            <div className='container contact_div'>
            <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>

            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">FullName</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="required" />
                
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Phone No.</label>
                <input type="text" class="form-control" id="exampleInputEmail1" required="required" />
              </div>
              
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="required" />                
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Message</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="required" />                
              </div>

              <div className='col-12'>
                <button className='btn btn-outline-primary' type='submit'>
                  Send Message
                </button>
              </div>
        </form>

            </div>

            </div>

            </div>
        </div>
    
    </>    
    
  );
}

export default Contact;
