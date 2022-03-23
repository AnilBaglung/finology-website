import React from 'react'
import './navbar.css'
import svg from './static/logo.svg'
import Main from './Main.js'


const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const[press, setPress]= React.useState(false);
  const[pres, setPres] = React.useState(false);

  const handleClick = ()=>setClick(!click);
  const closeMobileMenu = ()=> setClick(false);
  const closeMobileSubmenu = ()=>setPress(false);
  const closeMobileSubmenus =()=>setPres(false);
  const handleClicks = ()=> setPress(!press);
  const handleClickss =()=>setPres(!pres);
 
   return (
    
    <>
    <section className='header'>
      <nav className='navbar'>
        <a href='#'><img src={svg} className='nav-logo'></img></a>
        <div className='menu-icon' onClick ={handleClick}>
          <i className={click ? 'fa-solid fa-xmark':'fa-solid fa-bars'}/>
        </div>
          <ul className={click ? 'nav-menu active':'nav-menu'}>
            <li ><a href='#' onClick={closeMobileMenu}>HOME</a></li>
            <li ><a href='#'>ABOUT US<i className="fa-solid fa-caret-down"  onClick={handleClicks}></i></a>
              <div className='sub-menu' onClick={closeMobileSubmenu}>
                <ul className={press? 'nav-submenue active':'nav-submenue'}>
                  <li onClick={closeMobileMenu}><a onClick={closeMobileSubmenu}>OVERVIEW</a></li>
                  <li onClick={closeMobileMenu}><a onClick={closeMobileSubmenu}>OUR PEOPLE</a></li>
                  <li onClick={closeMobileMenu}><a onClick={closeMobileSubmenu}>NEWSROOM</a></li>
                </ul>
              </div>
            </li>
            <li className={'nav-item'}><a href='#' >PRODUCT & SERVICES<i className="fa-solid fa-caret-down" onClick={handleClickss}></i></a>
              <div className='sub-menu' onClick={closeMobileSubmenus} >
                <ul className={pres? 'nav-submenus active':'nav-submenus'}>
                  <li >MARKETPLACES</li>
                  <li onClick={closeMobileMenu} ><a onClick={closeMobileSubmenus}>LOANSTREET</a></li>
                  <li onClick={closeMobileMenu}><a href='#' onClick={closeMobileSubmenus}>LOANPLUS</a></li>
                  <li>API SERVICES</li>
                  <li onClick={closeMobileMenu}><a href='#'  onClick={closeMobileSubmenus}>CREDIT APIs</a></li>
                  <li onClick={closeMobileMenu}><a href='#' onClick={closeMobileSubmenus}>INSURENCE APIs</a></li>
                  <li >TECHNOLOGIES</li>
                  <li onClick={closeMobileMenu} ><a href='#'  onClick={closeMobileSubmenus}>XPRESSCOVER</a></li>
                </ul>
              </div>
            </li>
            <li className={'nav-item'}><a href='#' onClick={closeMobileMenu}>CONTACT US</a></li>
          </ul>
        </nav>
      <Main/>

    </section>
  </>
  )
}

export default Navbar