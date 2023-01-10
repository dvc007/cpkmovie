import React from 'react'
import { NavLink } from 'react-router-dom';
import UserNav from './UserNav';

export default function Header() {

    return (
        <div className='px-20 py-20 flex justify-between items-center shadow-xl'>
            <NavLink to={"/"}><span className='text-3xl font-medium text-red-600'>Cyber Flix</span></NavLink>
            <UserNav />
        </div>
    )
}
