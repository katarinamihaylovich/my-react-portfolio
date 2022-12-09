import React, { useState } from 'react';


const Contact = () => {
    const [formState, setFormState] = useState({ fullName: '', message: ''});

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    return (
        <main className='flex-row justify-center mb-4'>
          <div className='col-12 col-md-6'>
            <div className='card'>
              <h4 className='card-header'>Sign Up</h4>
              <div className='card-body'>
                <form >
                  <input
                    className='form-input'
                    placeholder='Your name'
                    name='fullName'
                    id='fullName'
                    onChange={handleChange}
                  />
                  <input
                    className='form-input'
                    placeholder='Your message'
                    name='message'
                    id='message'
                    onChange={handleChange}
                  />
                  <button className='btn d-block w-100' type='submit'>
                    Submit
                  </button>
                </form>
                
              </div>
            </div>
          </div>
        </main>
      );

}

export default Contact;

