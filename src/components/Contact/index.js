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
        <div className="card has-text-centered" style={{ width: "100%"}}>
            <div className="card-header has-text-centered">
                <h1 style={{ width: "100%" }}>Contact me</h1>
            </div>
            <div className="card-content has-text-left">
                <form id="contact-form" onSubmit={handleSubmit} style={{ width: "100%"}}>
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <div className="block">
                                <label htmlFor="name">Name:</label>
                            </div>
                            <div className="block">
                                <label htmlFor="email">Email address:</label>
                            </div>
                            <div className="block">
                                <label htmlFor="message">Message:</label>
                            </div>
                        </div>
                        <div className="column">
                            <div className="block">
                                <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                            </div>
                            <div className="block">
                                <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                            </div>
                            <div className="block">
                                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                            </div>
                        </div>
                    </div>
                    {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                    )}
                    <button data-testid="button" type="submit">Submit</button>
                </form>
            </div>
        </div>
      );
}

export default Contact;