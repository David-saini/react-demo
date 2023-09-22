import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Email_sec = () => {

    const alert = () => {

    };


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b3cepb8', 'template_2s9xxuf', form.current, 'lCBbtTQFIDI8Umfx4')

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Submmited your data',
            showConfirmButton: false,
            timer: 2000
        })

            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className='container pt-5'>
            <form ref={form} onSubmit={sendEmail}>
                <span className='d-flex align-items-center justify-content-center gap-2'>
                    <label htmlFor='fname' className='text'>Name :</label>
                    <input required type="text" name="user_name" id='fname' placeholder='Name' className='border_' />
                </span>

                <span className='d-flex align-items-center justify-content-center gap-2 pt-4'>
                    <label htmlFor='mail' className='text'>Email :</label>
                    <input required type="email" name="user_email" id='mail' placeholder='Email/Phone no.' className='border_' />
                </span>
                <span className='d-flex align-items-center justify-content-center gap-2 pt-4'>
                    <label htmlFor='password' className='text'>Password :</label>
                    <input required type="password" name="user_password" id='password' placeholder='PASSWORD' className='border_' />
                </span>


                <span className='d-flex align-items-center justify-content-center pt-5'>
                    <textarea required name="message" placeholder='Discripstion' className='w-300px' />
                </span>

                <span className='d-flex items-center justify-content-center pt-5'>
                    <a href="#" className='btn_1'>
                        <input type="submit" onClick={() => alert()} value="Send" className='bg' />
                    </a>
                </span>
            </form>
        </div>
    );
}

export default Email_sec