import { React, useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact()
{
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => 
    {
        if (e.target.name === 'email') 
        {
            const isValid = validateEmail(e.target.value);
            if (!isValid) 
            {
                setErrorMessage('Your email is invalid.');
            } 
            else 
            {
                setErrorMessage('');
            }
        } 
        else 
        {
            if (!e.target.value.length) 
            {
                setErrorMessage(`A ${e.target.name} is required.`);
            } 
            else 
            {
                setErrorMessage('');
            }
        }
        if (!errorMessage) 
        {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <div className="columns">
            <div className="column">
                <div className="card" style={{width: "100%"}}>
                    <div className="card-header has-text-centered">
                        <h1 style={{width: "100%"}}>Contact Info</h1>
                    </div>
                    <div className="card-content has-text-left">
                        <p>Email: zeuchtony@gmail.com</p>
                        <p>Phone Number: 405-905-9140</p>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card has-text-centered" style={{ width: "100%"}}>
                    <div className="card-header has-text-centered">
                        <h1 style={{ width: "100%" }}>Contact Me (Inactive)</h1>
                    </div>
                    <div className="card-content has-text-left">
                        <form id="contact-form" onSubmit={handleSubmit} style={{ width: "100%"}}>
                            <div>
                                <div>
                                    <div className="block">
                                        <label htmlFor="name">Name:</label>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <label htmlFor="email">Email address:</label>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <label htmlFor="message">Message:</label>
                                        <div className="field">
                                            <div className="control">
                                                <textarea className="textarea" name="message" rows="5"  cols="5" defaultValue={message} onBlur={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    {errorMessage && (
                                    <div className="block">
                                        <p className="error-text" style={{width: "50%", maxWidth: "50%"}}>{errorMessage}</p>
                                    </div>
                                    )}
                                    <div className="block">
                                        <button data-testid="button" type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Contact;