import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";


const Footer = () => {
  return (
    <div style={{
        // position: 'fixed',
        bottom: 0,
        width: '100%',
        padding: '20px',
        textAlign: 'center'
      }} className='bg-light'>
      <div>
        <h5><small>Let's talk!</small> support@mynmarmonthspopular.com</h5>
        <button className='btn btn-warning fs-6'>CONTACT US</button>
        <div>
        <TiSocialFacebook size={30} className='m-1'/>
        <FaTwitter size={20} className='m-1' />
        <FaWifi size={20} className='m-1'/>
        <TfiGoogle size={18}  />

        </div>
        <span>@Copyright All rights reserved</span>
      </div>
    </div>
  )
}

export default Footer
