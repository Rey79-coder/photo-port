// import React from 'react';

// WE NEED TO USE A USESTARE HOOK
//  To sync the form data of the user input with the component's state
import React, { useState } from 'react';


function ContactForm() {
    const [formState, setFormState] = useState
        ({ name: '', email: '', message: '' });

    const { name, email, message } = formState;


    // This function will sync the internal state of the component
    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    console.log(formState);


    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }


    // JSX 
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>

                <div>
                    <label className="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>

                <div>
                    <label className="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div>

                <div>
                    <label className="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;