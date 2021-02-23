import React from 'react'
import '../css/main.css'
import ContactForm from './contactForm.js'

function Home() {
    return (
        <>
            <div className='main home' >
                <h1 className='lg-heading'>
                    BRD <span className='text-secondary'>MSG</span>
                   
                </h1>
                <h2 className='md-heading'>
                    Umów wizytę
                </h2>
                <h3 className='sm-heading'>
                    Wybierz interesujące Cie usługi
                </h3>
               
                <ContactForm />
            </div>
        </>
    )
}

export default Home

