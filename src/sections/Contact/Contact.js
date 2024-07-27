import React, { useRef } from 'react';
import SecHead from '../../components/secHead/SecHead';
import './contact.scss';
import Primbtn from '../../components/Primary btn/Primbtn';
import { useDispatch } from 'react-redux';
import { showtoast } from '../../redux/slices/utilsSlice';
import emailjs from '@emailjs/browser';

function Contact() {
    const name = useRef(null);
    const email = useRef(null);
    const title = useRef(null);
    const message = useRef(null);
    const dispatch = useDispatch();

    async function handleSubmit(event) {
        event.preventDefault();

        if (!name.current.value || !email.current.value || !title.current.value || !message.current.value) {
            dispatch(showtoast({
                type: 'failure',
                message: 'All fields required!'
            }));
            return;
        }

        const form = {
            user_name: name.current.value,
            user_email: email.current.value,
            subject: title.current.value,
            message: message.current.value
        };

        try {
            await emailjs.send("service_uirr5ib", "template_hviv7tl", form, "BfLLGzTUgs3wiNmk6");

            name.current.value = "";
            email.current.value = "";
            title.current.value = "";
            message.current.value = "";

            dispatch(showtoast({
                type: 'success',
                message: 'Form Submitted'
            }));
        } catch (error) {
            console.error('Error sending email:', error);
            dispatch(showtoast({
                type: 'failure',
                message: error.text || 'Failed to send the form'
            }));
        }
    }

    function handleReset() {
        name.current.value = "";
        email.current.value = "";
        title.current.value = "";
        message.current.value = "";

        dispatch(showtoast({
            type: 'success',
            message: 'Form Reset'
        }));
    }

    return (
        <div id='scroll-contact' data-aos="fade-up" className='contact'>
            <div className="container">
                <div className="content flex-col">
                    <SecHead head="Contact Me" subhead="Get in touch" />
                    <div className="bottom">
                        <div className="left flex-col">
                            <div className="each-mode hover-link">
                                <i className="uil uil-envelope"></i>
                                <h4 className="txt email-txt">Email</h4>
                                <p className="email">ekanshbhushan@gmail.com</p>
                            </div>
                            <div className="each-mode hover-link">
                                <i className="uil uil-map-marker"></i>
                                <h4 className="txt location-txt">Location</h4>
                                <p className="email">New-Delhi</p>
                            </div>
                        </div>
                        <div className="right flex-col">
                            <form onSubmit={handleSubmit} className='form'>
                                <div className="name">
                                    <label htmlFor="name-input">Name</label>
                                    <input autoComplete='off' required ref={name} type="text" id="name-input" />
                                </div>
                                <div className="req-email">
                                    <label htmlFor="email-input">Email</label>
                                    <input autoComplete='off' required ref={email} name="email" type='email' id="email-input" />
                                </div>
                                <div className="title">
                                    <label htmlFor="title-input">Subject</label>
                                    <input autoComplete='off' required ref={title} type="text" id="title-input" />
                                </div>
                                <div className="message">
                                    <label htmlFor="input-message">Message</label>
                                    <textarea autoComplete='off' required ref={message} maxLength={600} id='input-message' cols="" rows="10"></textarea>
                                </div>
                            </form>
                                <div className="buttons center">
                                    <button type="submit">
                                        <Primbtn value="Submit" icon={<i className="uil uil-message"></i>} />
                                    </button>
                                    <button type="button" onClick={handleReset}>
                                        <Primbtn value="Reset" icon={<i className="uil uil-history-alt"></i>} />
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
