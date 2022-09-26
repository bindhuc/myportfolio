import React from 'react'

const Home = () => {
  return (
    <div>
       <div className='second-box'>
        <div className='start'>
<p className='intro'>Hi, I am C Sai Bindhu</p>
<p className='introtwo'>A Front-end Developer</p>
<p className='intro3'>	Create. Engage. Inspire</p>
</div>
<img  className='imageone' src="images/react.png" alt='la'/>



      </div>
      <div className='about'>
        <h2 className='heading2'>About Me</h2> <br/>

        <p className='content'>I am a web designer and frontend developer, i am intrested in web designing and 
          building colorful web designs <br/>
          <br/>
          During lesiure i like to play outdoor games, i also like gardening <br/>
          and cooking
          </p>
    
    <div className='box3'>
      <div className='heading3'>
        <h4>Languages/Technology/Library</h4>
        <div className='images'>
        <img className="html" src="images/html.png"alt=""/>
        <img className="css" src='images/css.png' alt=""/>
        <img className="js" src="images/js.png" alt=""/>
        <img className='react' src="images/react.png" alt=""/>
        <img className="node" src="images/no.png" alt=""/>
        <img className='gits' src="images/git.png" alt=""/>
        <img className='netlify' src="images/netlify.png" alt=""/>
        
      </div>
      </div>
      </div>
      </div>
      <img className='lap' src="images/lap.png" alt=""/>
       
      <div className='box4'>
 <h3 className='project'>Projects</h3>
 <div className='b1'>
    <a href="https://bindhuc.github.io/clock/" target="_blank" rel="noreferrer">
<img className='clock' src="images/one.png" alt=""/>
</a>
<a href="https://bindhuc.github.io/todo-responsive/" target="_blank" rel="noreferrer">
<img className='todo' src="images/two.png" alt="" />
</a>

<a href="https://bindhuc.github.io/todojs/" target="_blank" rel="noreferrer">
    <img className='task' src="images/three.png" alt=""/>
</a>
<a href="https://warm-sunshine-1ceaca.netlify.app/" target="_blank" rel="noreferrer">
<img className='blog' src="images/four.png" alt=""/>
</a>
<a href="https://nervous-jones-1c2abe.netlify.app/" target="_blank" rel="noreferrer">
  <img className='empl' src="images/five.png" alt=""/>  
</a>
<a href="https://happy-bartik-23ce8c.netlify.app/" target="_blank" rel="noreferrer">
<img className='stu' src="images/six.png" alt=""/>
</a>
 </div>

</div>
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

export default Home





// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'
// import './Style.css'


// const Home = () => {
//   return (
//     <div>
//       <nav>
//         <div className='header'>
//             <h3 className='name'>C SAI BINDHU</h3>
//             <ul className='heading'>
//         <Link to='/' className='head'>Home</Link>
//         <Link to='/Home' className='head'> Home</Link>
//       <Link to ='/About' className='head'>About</Link>
//      <Link to='/Project'className='head'>Project</Link>
//      <Link to ='/Contact' className='head'>Contact</Link>
     
//        </ul>
//        </div> 
       
//       </nav>
//       <Outlet/>

// </div>
//   )
// }

// export default Home

      
      {/* <div className='second-box'>
<p className='intro'>Hi,I am C Sai Bindhu</p>
<p className='introtwo'>A Front-end Developer</p>
<img  className='image' src="images/laptop.jpg" alt='la'/>
<img className='image2' src='' alt=""/>

      </div> */}


      {/* <div className='about'>
        <h2 className='heading2'>About Me</h2> <br/>

        <p className='content'>I am a web designer and frontend developer, i am intrested in web designing and 
          building colorful web designs <br/>
          <br/>
          During lesiure i like to play outdoor games, i also like gardening <br/>
          and cooking
          </p>
    
    <div className='box3'>
      <div className='heading3'>
        <h4>Languages/Technology/Library</h4>
        <div className='images'>
        <img className="html" src="images/html.png"alt=""/>
        <img className="css" src='images/css.png' alt=""/>
        <img className="js" src="images/js.png" alt=""/>
        <img className='react' src="images/react.png" alt=""/>
        <img className="node" src="images/no.png" alt=""/>
        
      </div>
      </div>
      </div>
      </div> */}

     {/* <div className='box4'>
      <h3 className='project'>Projects</h3>

     </div> */}

{/* <div className='box5'>
      <h3 className='Contact'>Contact</h3>

     </div> */}
    
