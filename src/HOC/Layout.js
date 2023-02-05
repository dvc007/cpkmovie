import React from 'react'
import Footer from '../Pages/Component/Footer/Footer';
import Header from './../Pages/Component/Header/Header';

export default function Layout({ children }) {
    return <div>
        <Header />
        {children}
        <Footer />

    </div>
}
