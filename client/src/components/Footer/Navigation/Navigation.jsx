import Button from '@mui/material/Button'
import React from 'react'
import { Link } from 'react-router-dom'

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Navigation() {
  return (
    <div className='footer flex px-3 lg:px-0 flex-col lg:flex-row py-8 border-t-2'>
      {/* --Start-- */}
      <div className='part1 w-full lg:w-[25%] border-r border-[rgba(0,0,0,0.1)]'>
        <h2 className='text-[18px] font-[600] mb-4'>Contact us</h2>
        <p className='text-[13px] font-[400] pb-4'>
          Classyshop - Mega Super Store
          <br />
          Shipra Path Jaipur Rajsthan India
        </p>
        <Link to={'mailto:sales@yourcompany.com'} className='link text-[13px]'>sales@yourcompany.com</Link>
        <p className='text-[22px] font-[600] block w-full mt-3 mb-5 text-primary'>(+91) 9876-543-210</p>

        <div className='flex items-center gap-2'>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[40px] text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linejoin="round" stroke-width="32" d="M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56z"></path></svg>
          <p className='text-[16px] font-[600]'>
            Online Chat <br /> Get Expert Help
          </p>
        </div>
      </div>
      {/* --End-- */}

      {/* --Start-- */}
      <div className='part2  w-full lg:w-[40%] flex pl-0 lg:pl-8 mt-5 lg:mt-0'>
        <div className='part2_col1 w-[50%]'>
          <h2 className='text-[18px] font-[600] mb-4'>Products</h2>
          <ul className='list'>
            <li className='list-none text-[14px] w-full mb-2'>
              <Link className='link' to={''} >Prices drop</Link>
            </li>
            <li className='list-none text-[14px] w-full mb-2'>
              <Link className='link' to={''} >New products</Link>
            </li>
            <li className='list-none text-[14px] w-full mb-2'>
              <Link className='link' to={''} >Best sales</Link>
            </li>
            <li className='list-none text-[14px] w-full mb-2'>
              <Link className='link' to={''} >Contact us</Link>
            </li>
            <li className='list-none text-[14px] w-full mb-2'>
              <Link className='link' to={''} >Sitemap</Link>
            </li>
            <li className='list-none text-[14px] w-full mb-2'>
              <Link className='link' to={''} >Stores</Link>
            </li>
          </ul>
        </div>
        <div className='part2_col2 w-[50%]'>
          <h2 className='text-[18px] font-[600] mb-4'>Our company</h2>
          <ul className='list'>
            <li className='list-none text-[14px] w-full mb-2'>
              <Link className='link' to={''} >Delivery</Link>
            </li>
            <li className='list-none text-[14px] w-full mb-2'>
              <Link className='link' to={''} >Legal Notice</Link>
            </li>
            <li className='list-none text-[14px] w-full mb-2'>
              <Link className='link' to={''} >Terms and conditions of use</Link>
            </li>
            <li className='list-none text-[14px] w-full mb-2'>
              <Link className='link' to={''} >About us</Link>
            </li>
            <li className='list-none text-[14px] w-full mb-2'>
              <Link className='link' to={''} >Secure payment</Link>
            </li>
            <li className='list-none text-[14px] w-full mb-2'>
              <Link className='link' to={''} >Login</Link>
            </li>
          </ul><ul></ul>
        </div>
      </div>
      {/* --End-- */}

      {/* --Start-- */}
      <div className='part2  w-full lg:w-[35%] flex pl-0 lg:pl-8 flex-col pr-8 mt-5 lg:mt-0'>
        <h2 className='text-[18px] font-[600] mb-2 lg:mb-4'>Subscribe to newsletter</h2>
        <p className='text-[13px]'>Subscribe to our latest newsletter to get news about special discounts.</p>
        <form className='mt-5 flex flex-col items-center justify-center gap-3'>
          <input type="text" className='w-full border-2 border-gray outline-none rounded px-3 py-2' placeholder='Your Email Address' />

          {/* --Button start */}
          <Button
            fullWidth
            variant="contained"
            className='!mt-3 !w-fit !bg-[#ff5252] hover:!bg-[#fe6d6d] z-10'
          >Subscribe</Button>
          {/* --end-- */}

          <FormControlLabel
            required
            control={<Checkbox />}
            label="I agree to the terms and conditions and the privacy policy"
            sx={{
              '& .MuiFormControlLabel-label': {
                fontSize: '14px',   // change size here
                fontWeight: 500,
              }
            }}
          />
        </form>
      </div>
      {/* --End-- */}
    </div>
  )
}
