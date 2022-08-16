import { margin } from '@mui/system'
import React from 'react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className='container-fluid'>
     <img className='brand' src='../img/logoc.png' alt='logo'/>
        <div className='container my-3 py-3'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='title'>Why Us ?</h1>
            {/* <hr /> */}
            <p className='des'>"BABI Rental" is the number one online equipment renting platform which provides best quality brand new products for rent at low price with 100% customer satisifaction. We are the 1st Equipment rental website providing brand new electronic eqipments at low price. Our moto is to make people life eaiser by providing them their needs at their door steps. </p>
          </div>
        </div>
      </div>
      <div className='container my-3 py-3'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <hr style={{marginTop:"30px"}}/>
            <h1 className='title'>Our Services</h1>
            {/* <hr /> */}
            <ul className='des'>
              <li style={{padding:"10px"}}>Equipment Rental Services</li>
              <li style={{padding:"10px"}}>Camera rental services</li>
              <li style={{padding:"10px"}}>Laptop rental services</li>
              <li style={{padding:"10px"}}>Speaker rental services</li>
              <li style={{padding:"10px"}}>Generator rental services</li>
              <li style={{padding:"10px"}}>Fast delivery</li>
              <li style={{padding:"10px"}}>Customer support</li>
            </ul>
          </div>
        </div>
      </div>
      <hr style={{marginTop:"30px"}}/>
      </div>
      <h1 className='title'>Most Rented</h1>
            <Products />
        </div>
    )
}
