import React from 'react'
import { Desktop, Mobile, Tablet } from './../../../HOC/Responsive';
import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';
import FooterTable from './FooterTable';

export default function Footer() {
    return (
        <div>

            <Desktop>
                <FooterDesktop />
            </Desktop>

            <Tablet>
                <FooterTable />
            </Tablet>

            <Mobile >
                <FooterMobile />
            </Mobile>


        </div>
    )
}
