import React from 'react'

const Portfolio = () => {



  return (
    <div>
      <div className='box5'>
      <h3 className='contact'>Contact</h3>
<div  className='connect'>
      <h4>Let's Connect</h4>
<div className='all'>
      <h6>Github </h6>
      <a href="https://github.com/bindhuc" target="_blank" rel="noreferrer">
      <img className='git' src="images/git.png" alt="" />
</a>
</div>
</div>
<img className='mail' src="images/maill.png" alt=""/>
<p className='mailtext'>bindhusai001@gmail.com</p> 
<div className='mail'>
<i class="fa-sharp fa-solid fa-phone"></i></div>
<p className='mailtext'>9148313330</p>
<div className='add'>
<i class="fa-solid fa-location-dot"></i>
<p className='address'>Bellary,&nbsp;Karnataka,&nbsp;india</p>
</div>
<div className='box6'>
      <form className='form'>
        <label >Name  :
        <input  type="text" className='name' required/> </label><br/> <br/> 
        <label>Phone Number  :
        <input className='pno' type="number" required/></label> <br/><br/>
        <label>Email  :
        <input className='email' type="email" required/> </label><br/><br/>
        <label >Message  : 
        <input className='msg' type="text" required/></label> <br/><br/>
        
        <input type="submit" className='submit'/>
      </form>
     </div>
     </div>
     


    </div>
  )
}

export default Portfolio
