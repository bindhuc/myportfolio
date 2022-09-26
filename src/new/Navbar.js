// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//        <div className='second-box'>
// <p className='intro'>Hi,I am C Sai Bindhu</p>
// <p className='introtwo'>A Front-end Developer</p>
// <img  className='image' src="images/laptop.jpg" alt='la'/>
// <img className='image2' src='' alt=""/>

//       </div>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Style.css'


const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <div className='header'>
            <h3 className='names'>C SAI BINDHU</h3>
            <ul className='heading'>
        <Link to='/' className='head'>Home</Link>
        {/* <Link to='/Home' className='head'> Home</Link> */}
      <Link to ='/About' className='head'>About</Link>
     <Link to='/Project'className='head'>Projects</Link>
     <Link to ='/Contact' className='head'>Contact</Link>
     
       </ul>
       </div> 
       
      </nav>
      <Outlet/>

</div>
  )
}

export default Navbar
