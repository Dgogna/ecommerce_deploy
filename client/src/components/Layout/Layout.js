import React from 'react'
import Header from './Header'
import Footer from './Footer'

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
    return (
        <div className='container'>
            <Header />
            <main style={{minHeight:"75vh"}}>
            
                {props.children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout
